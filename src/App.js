import React from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {
          id: "adaf1",
          name: "max",
          age: "24"
      },
      {
          id: "iuybfuwu2",
          name: "manu",
          age: "27"
      },
      {
          id: "qnbvu3",
          name: "salu",
          age: "35"
      }
    ],
    showPersons: false
  };

//   switchNameHandler = (newName) => {

//     this.setState(
//       {
//         persons: [
//           {
//             name: newName,
//             age: "24"
//           },
//           {
//             name: "manu",
//             age: "27"
//           },
//           {
//             name: "pathum herath",
//             age: "35"
//           }
//         ]
//       }
//     )
//   };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; this is danger use as does not copy object and reference to direct object
    //const persons = this.state.persons.slice(); this is old way copy an object
    const persons = [...this.state.persons]; // this is modern way copy an object
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(per => {
          return per.id === id;
      });
      //let person = Object.assign({}, this.state.persons[personIndex]); this is old way

      //modern way
      let person = {
          ...this.state.persons[personIndex]
      }
      person.name = event.target.value;
      const persons = this.state.persons;
      persons[personIndex] = person;
      this.setState({persons: persons});
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
                    this.state.persons.map( (person, index) => {
                        return <Person
                        click = {() => this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        changed = {(event) => this.nameChangedHandler(event, person.id)}
                        />
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
