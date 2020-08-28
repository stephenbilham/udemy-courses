import React, { Component } from "react";
import "./App.css";

import { Person } from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "steve", age: 26 },
      { name: "Tif", age: 46 },
      { name: "Nud", age: 24 }
    ]
  };

  switchNameHandler = () => {
    console.log("you just called me what can I do");
    this.setState({
      persons: [
        { name: "steve", age: 27 },
        { name: "Tif", age: 47 },
        { name: "Nud", age: 25 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hey, I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I love nothing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
export default App;
