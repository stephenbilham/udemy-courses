import React from "react";

import { AddExpensePage } from "../../components/AddExpensePage"; //class
import { expenses } from "../fixtures/expenses";
import { shallow } from "enzyme";

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/dashboard");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
