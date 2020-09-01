import React from "react";
import "./Person.css";

export const Person = props => {
  return (
    <div className="person">
      <p onClick={props.deletePersonHandler}>
        I am a {props.name} and i am {props.age} years old!
      </p>
      <p> {props.children}</p>
      <inputpro
        type="text "
        onChange={props.nameChangedHandler}
        value={props.name}
      />
    </div>
  );
};
