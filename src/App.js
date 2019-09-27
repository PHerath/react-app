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
    ],
    showPersons: false
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

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
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
  };

  render(){
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
        persons = (
            <div>
                {
                    this.state.persons.map( person => {
                        return <Person
                        name = {person.name}
                        age = {person.age}/>
                    })
                }
        </div>
        )
    };
    return (
      <div className="App">
      <h1>Hello world</h1>
      <p>first react app</p>
      <button style = {style} onClick = {this.togglePersonHandler}>Switch Person</button>
      {persons}
    </div>
    )
  }
}

export default App;
