import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredient";
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // the array after ingredients confused me a bit
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((acc, el) => {
      return acc.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
