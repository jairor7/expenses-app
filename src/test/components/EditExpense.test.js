import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import toJSON from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import { expenses } from "../fixtures/expenses";

let editExpense, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <BrowserRouter>
      <EditExpense editExpense={editExpense} removeExpense={removeExpense} />
    </BrowserRouter>
  );
});

test("should render CreateExpense correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("EditExpense").prop("editExpense")(expenses[0]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0]);
});

test("should handle removeExpense", () => {
  wrapper.find("EditExpense").prop("removeExpense")({ id: expenses[0].id });
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
