import React, { useState } from "react";
import "./App.css";

import { Person } from "./components/Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "sddfsd", name: "steve", age: 26 },
      { id: "sshgfd", name: "Tif", age: 46 },
      { id: "cfdsks", name: "Nud", age: 24 }
    ]
  });

  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (e, id) => {
    const personIndex = personsState.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
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
              key={person.id}
              deletePersonHandler={() => deletePersonHandler(index)}
              nameChangedHandler={event => nameChangedHandler(event, person.id)}
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
