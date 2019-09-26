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

  render(){
    return (
      <div className="App">
      <h1>Hello world</h1>
      <p>first react app</p>
      <button onClick={() => this.switchNameHandler("Maxmillion")}>Switch Person</button>
      <Person
      name={this.state.persons[0].name}
      age={this.state.persons[0].age} />
      <Person
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, "max!")}>
      Children Property</Person>
      <Person
      name={this.state.persons[2].name}
      age={this.state.persons[2].age} />
    </div>
    )
  }
}

export default App;
