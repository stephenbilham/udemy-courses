import React, { Component } from "react";
import styles from "./App.module.css";

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  // componentDidMount = () => {
  //   console.log("[app.js] didMount");
  // };

  // componentDidUpdate() {
  //   console.log("[app.js] didUpdate");
  // }

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log("[app.js] shouldUpdate");
  //   return true;
  // }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }; // use if depending on previous old state

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
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          show pit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersonHandler={this.togglePersonHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
