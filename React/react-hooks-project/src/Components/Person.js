import React from "react";

import "./Person.css";

const Person = props => {
  return (
    <div className="person">
      <p onClick={props.switchInfoHandler}>
        I am a {props.name} and i am {props.age} old
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.nameChangeHandler}
        value={props.name}
      />
    </div>
  );
};

export default Person;
