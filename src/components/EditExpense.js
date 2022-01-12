import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense } from "../store/redux/actions/expenses";
import { removeExpense } from "../store/redux/actions/expenses";
import ExpenseForm from "./ExpenseForm";

export const EditExpense = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = props.expenses.find((expense) => expense.id === id);

  const onSubmit = (expense) => {
    props.editExpense({
      id,
      description: expense.description,
      amount: parseFloat(expense.amount, 10),
      createdAt: expense.createdAt.valueOf(),
      note: expense.note,
    });
    navigate("/");
  };

  const onClickRemoveExpense = () => {
    props.removeExpense({ id });
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm onSubmit={onSubmit} expense={expense} />
      <button onClick={onClickRemoveExpense}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense) => dispatch(editExpense(expense)),
    removeExpense: (id) => {
      dispatch(removeExpense(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
