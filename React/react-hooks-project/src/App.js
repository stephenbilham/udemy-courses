import React, { Component } from "react";

import Person from "./Components/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "steve",
        age: 43
      },
      {
        name: "bryan",
        age: 21
      },
      {
        name: "tyler",
        age: 10
      }
    ],
    otherState: "some value"
  };

  switchInfoHandler = (newName, newAge) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: newAge
        },
        {
          name: "tyler",
          age: 10
        },
        {
          name: "steve",
          age: 43
        }
      ]
    });
  };

  nameChangeHandler = e => {
    this.setState({
      persons: [
        {
          name: "Collin",
          age: 20
        },
        {
          name: "tylerTHeCreator",
          age: 15
        },
        {
          name: e.target.value,
          age: 45
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchInfoHandler("bryan", 99)}>
          Switch Name
        </button>
        <Person
          switchInfoHandler={this.switchInfoHandler.bind(this, "mother", 120)}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies are painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          nameChangeHandler={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
