import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/ExpensesList";
import { expenses } from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test("should render Expenselist with expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
