import { v4 as uuid } from "uuid";
import { expenseTypes } from "../types";

// ADD_EXPENSE
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: expenseTypes.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: expenseTypes.REMOVE_EXPENSE,
  id,
});

// EDIT_EXPENSE
export const editExpense = ({ id, ...updates } = {}) => ({
  type: expenseTypes.EDIT_EXPENSE,
  id,
  updates,
});
