import React from "react";

import styles from "./Input.module.css";

const input = props => {
  console.log(props);
  let inputElement = null;

  switch (props.inputType) {
    case "input":
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea className={styles.InputElement} value={props.value} />
      );
      break;
    case "select":
      inputElement = (
        <select className={styles.InputElement} value={props.value}>
          {props.elementConfig.options.map(option => {
            return <option value={option.value}>{option.displayValue}</option>;
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
