import React from "react";
import Person from "../Person/Person";

const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        age={person.age}
        key={person.id}
        deletePersonHandler={() => props.deletePersonHandler(index)}
        name={person.name}
        nameChangeHandler={e => props.nameChangeHandler(e, person.id)}
      />
    );
  });

export default Persons;
