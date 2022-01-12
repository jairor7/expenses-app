import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../store/redux/actions/expenses";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateExpense = (props) => {
  const navigate = useNavigate();
  const onSubmit = (expense) => {
    props.addExpense({
      description: expense.description,
      amount: parseFloat(expense.amount, 10),
      createdAt: expense.createdAt.valueOf(),
      note: expense.note,
    });
    navigate("/");
  };
  return (
    <div>
      <h1>Create Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExpense);
