import React, { useState } from "react";
import "./App.css";

import { Person } from "./components/Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "steve", age: 26 },
      { name: "Tif", age: 46 },
      { name: "Nud", age: 24 }
    ]
  });

  const [showPersons, setShowPersons] = useState(false);

  // const switchPersonInfo = name => {
  //   setPersonsState({
  //     persons: [
  //       { name: name, age: 23 },
  //       { name: "Tif", age: 42 },
  //       { name: "Nud", age: 34 }
  //     ]
  //   });
  // };

  // const nameChangedHandler = e => {
  //   e.preventDefault();
  //   setPersonsState({
  //     persons: [
  //       { name: "steve", age: 23 },
  //       { name: e.target.value, age: 42 },
  //       { name: "byan", age: 34 }
  //     ]
  //   });
  // };

  const deletePersonHandler = index => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ persons });
  };

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              key={person.name}
              deletePersonHandler={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hey, I am a react app</h1>
      <button style={style} onClick={togglePersonHandler}>
        toggle persons
      </button>
      {persons}
    </div>
  );
};

export default App;
