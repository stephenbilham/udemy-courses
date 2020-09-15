import React, { Component } from "react";
import styles from "./App.module.css";

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
  }

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

  static getDerivedStateFromProps(props, state) {}

  componentDidMount = () => {};

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

    if (this.state.showPersons) {
      persons = (
        <Persons
          deletePersonHandler={this.deletePersonHandler}
          nameChangeHandler={this.nameChangeHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonHandler={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
