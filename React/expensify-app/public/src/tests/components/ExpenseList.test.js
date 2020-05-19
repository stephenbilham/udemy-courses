import React from "react";
import { expenses } from "../fixtures/expenses";

import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
