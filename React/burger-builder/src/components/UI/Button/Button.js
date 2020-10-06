import React from "react";

import styles from "./Button.module.css";

const button = props => (
  <button
    className={[styles.Button, styles[props.btnType]].join(" ")}
    onClick={props.purchaseContinueHandler || props.modalClosed}
  >
    {props.children}
  </button>
);

export default button;
