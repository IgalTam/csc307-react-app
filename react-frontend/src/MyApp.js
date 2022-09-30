import React, {useState, useEffect} from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios'

function MyApp() {
    const[characters, setCharacters] = useState([]);
    
    function removeOneCharacter (index) {
            const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    function remChar(id, index) {
      makeDeleteCall(id).then( result => {
        if (result && result.status === 204) {
          console.log(index);
          removeOneCharacter(index);
        }
      })
    }

    function updateList(person) {
      makePostcall(person).then( result => {
        if (result && result.status === 201)
          setCharacters([...characters, result.data]);
        });
    }

    async function fetchAll() {
      try {
        const response = await axios.get(`http://localhost:5000/users`);
        return response.data.users_list;
      }
      catch (error) {
        console.log(error);
        return false;
      }
    }

    useEffect(() => {
      fetchAll().then( result => {
        if (result)
          setCharacters(result);
      });
    }, []);

    async function makePostcall(person) {
      try {
        const response = await axios.post(`http://localhost:5000/users`, person);
        return response;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    async function makeDeleteCall(id) {
      try {
        const response = await axios.delete(`http://localhost:5000/users/${id}`);
        return response;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    return (
        <div className="container">
          <Table characterData={characters} removeCharacter={remChar} />
          <Form handleSubmit={updateList} />
        </div>
      )

}


export default MyApp;