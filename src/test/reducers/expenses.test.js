import expensesReducer from "../../store/redux/reducers/expenses";
import moment from "moment";
import { expenses } from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3], expenses[4]]);
});

test("should not remove expense if id noy fount", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "0",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "6",
      description: "Coffee",
      note: "",
      amount: 300,
      createdAt: moment(0).add(4, "days").valueOf(),
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[4].id,
    updates: {
      description: "Coffee",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[4].description).toBe("Coffee");
});

test("should not edit expense if expense not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "8",
    updates: {
      description: "Coffee",
      note: "",
      amount: 300,
      createdAt: moment(0).add(4, "days").valueOf(),
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
