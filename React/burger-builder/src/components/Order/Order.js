import React from "react";

import styles from "./Order.module.css";

const order = props => {
  const ingredients = [];
  // for (let key in props.ingredients) {
  //   ingredients.push(`${key} : (${props.ingredients[key]})
  //   `);
  // } my solution but doing his incase something goes wrong

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "10px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={styles.Order}>
      {ingredientOutput}
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </div>
  );
};
export default order;
