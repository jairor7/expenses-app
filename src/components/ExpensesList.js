import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../store/redux/selectors/expenses";

export const ExpensesList = (props) => (
  <div>
    <h1>Expenses List</h1>
    <p>This is the expenses list</p>
    {props.expenses.length === 0 ? (
      <p>No items - no expenses</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
