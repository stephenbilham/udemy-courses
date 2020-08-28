import React from "react";

export const Person = props => {
  return (
    <div>
      <p>
        I am a {props.name} and i am {props.age} years old!
      </p>
      <p> {props.children}</p>
    </div>
  );
};
