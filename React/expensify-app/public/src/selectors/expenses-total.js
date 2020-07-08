import React from "react";
import { expenses } from "../tests/fixtures/expenses";

const selectExpensesTotal = expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

export default selectExpensesTotal;
