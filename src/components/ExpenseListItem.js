import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;

  return (
    <div>
      <Link to={`/editExpense/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
