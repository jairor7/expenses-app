import React from "react";
import { shallow } from "enzyme";
import { CreateExpense } from "../../components/CreateExpense";
import toJSON from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import { expenses } from "../fixtures/expenses";

let addExpense, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  wrapper = shallow(
    <BrowserRouter>
      <CreateExpense addExpense={addExpense} />
    </BrowserRouter>
  );
});

test("should render CreateExpense correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onSubmit the addExpense", () => {
  wrapper.find("CreateExpense").prop("addExpense")(expenses[0]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
