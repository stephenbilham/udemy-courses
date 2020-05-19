import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { expenses } from "../fixtures/expenses";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";

test("should render expenseListItems correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
