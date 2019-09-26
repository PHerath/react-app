import React from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
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

  switchNameHandler = (newName) => {

    this.setState(
      {
        persons: [
          {
            name: newName,
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
      }
    )
  };

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {
            name: event.target.value,
            age: "24"
          },
          {
            name: event.target.value,
            age: "27"
          },
          {
            name: "pathum herath",
            age: "35"
          }
        ]
      }
    )
  }

  render(){
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
      <h1>Hello world</h1>
      <p>first react app</p>
      <button style = {style} onClick = {( ) => this.switchNameHandler("Maxmillion") }>Switch Person</button>
      <Person
      name = { this.state.persons[0].name }
      age = { this.state.persons[0].age }
      change = { this.nameChangedHandler }
      />
      <Person
      name = { this.state.persons[1].name }
      age = { this.state.persons[1].age }
      click = { this.switchNameHandler.bind(this, "max!") }
      change = { this.nameChangedHandler }>
      Children Property
      </Person>
      <Person
      name = { this.state.persons[2].name }
      age = { this.state.persons[2].age }
      />
    </div>
    )
  }
}

export default App;
