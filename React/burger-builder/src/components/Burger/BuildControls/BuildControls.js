import React from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${props.totalPrice.toFixed(2)}</strong>
    </p>

    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        ingredientAdded={() => props.addIngredientHandler(ctrl.type)}
        removeIngredient={() => props.removeIngredientHandler(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.isOrderReady}
      onClick={props.purchaseHandler}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
