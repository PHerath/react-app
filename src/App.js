import React from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const personInitialState = {
    persons: [
      {
        name: "max",
        age: "24"
      },
      {
        name: "manu",
        age: "27"
      },
      {
        name: "salu",
        age: "35"
      }
    ]
  };
  const [personState, setPersonState] = useState(personInitialState);

  const switchNameHandler = () => {

    setPersonState({
      persons: [
        {
          name: "maxmilion",
          age: "24"
        },
        {
          name: "manu",
          age: "27"
        },
        {
          name: "pathum herath",
          age: "35"
        }
      ]
    });
  };
    return (
    <div className="App">
      <h1>Hello world</h1>
      <p>first react app</p>
      <button onClick={switchNameHandler}>Switch Person</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
      <Person>Children Property</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  )
}

export default App;
