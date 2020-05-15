import React from "react";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

//Export a stateless functional component
// discription, amount, createAt;

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    {amount} - {createdAt}
  </div>
);

export default ExpenseListItem;
