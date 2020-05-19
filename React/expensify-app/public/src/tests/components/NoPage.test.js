import React from "react";
import NoPage from "../../components/NoPage";

import { shallow } from "enzyme";

test("should render NoPage component correctly", () => {
  const wrapper = shallow(<NoPage />);
  expect(wrapper).toMatchSnapshot();
});
