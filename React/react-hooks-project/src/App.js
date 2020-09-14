import React, { Component } from "react";
import styles from "./App.module.css";

import Person from "./Components/Person";

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
    let persons = null;
    let btnClass = ""; //makes it an array so you can push new classes with js func

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                age={person.age}
                key={person.id}
                deletePersonHandler={() => this.deletePersonHandler(index)}
                name={person.name}
                nameChangeHandler={e => this.nameChangeHandler(e, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = styles.red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hello, I am a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        <div>{persons}</div>
      </div>
    );
  }
}

export default App;
