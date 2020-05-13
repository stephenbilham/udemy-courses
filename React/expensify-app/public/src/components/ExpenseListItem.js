import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

//Export a stateless functional component
// discription, amount, createAt;

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    {amount} - {createdAt}
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
      style={{ margin: "15px", border: "1px solid grey" }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
