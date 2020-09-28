import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";

import AuthContext from "../../Context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[cockpit], use effec");
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[cockpit] clean up");
    };
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] 2nd use Effect");
    return () => {
      console.log("[cockpit] clean up 2 ");
    };
  });

  const assignedClasses = [];
  let btnClass = ""; //makes it an array so you can push new classes with js func

  if (props.showPersons) {
    btnClass = styles.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.togglePersonHandler}
        ref={toggleBtnRef}
      >
        Switch Name
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
