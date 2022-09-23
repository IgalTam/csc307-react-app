import React from 'react'
import Table from './Table'

const characters = [
    {
        name: 'Charlie',
        job: 'Janitor',
    },
    {
        name: 'Mac',
        job: 'Bouncer',
    },
    {
        name: 'Dee',
        job: 'Aspiring Actress',
    },
    {
        name: 'Dennis',
        job: 'Bartender',
    },
];

function MyApp() {
    return (
      <div classname="container">
        <Table characterData={characters}/>
      </div>
    );
}

export default MyApp;