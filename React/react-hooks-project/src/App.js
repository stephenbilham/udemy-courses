import React, { Component } from "react";

import Person from "./Components/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "steve",
        age: 43,
        id: "sdsdfjg"
      },
      {
        name: "bryan",
        age: 21,
        id: "adfgjdf"
      },
      {
        name: "tyler",
        age: 10,
        id: "tnewskf"
      }
    ],
    showPersons: false
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                age={person.age}
                deletePersonHandler={() => this.deletePersonHandler(index)}
                name={person.name}
                nameChangeHandler={e => this.nameChangeHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        <div>{persons}</div>
      </div>
    );
  }
}

export default App;
