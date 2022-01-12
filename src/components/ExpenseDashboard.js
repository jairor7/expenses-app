import React from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesList from "./ExpensesList";

const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export default ExpenseDashboard;
