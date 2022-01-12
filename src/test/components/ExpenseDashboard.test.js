import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../components/ExpenseDashboard";
import toJSON from "enzyme-to-json";

test("should render ExpenseDashboard correctly", () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
