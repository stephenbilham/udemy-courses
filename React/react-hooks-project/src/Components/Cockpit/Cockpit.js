import React from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = ""; //makes it an array so you can push new classes with js func

  if (props.showPersons) {
    btnClass = styles.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hello, I am a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.togglePersonHandler}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
