import React from "react";

import styles from "./Person.module.css";

const Person = props => {
  return (
    <div className={styles.person}>
      <p onClick={props.deletePersonHandler}>
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
