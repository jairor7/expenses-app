import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false,
    error: "",
  };

  componentDidMount() {
    const { expense } = this.props;
    if (expense) {
      this.setState({
        description: expense.description,
        note: expense.note,
        amount: expense.amount,
        createdAt: moment(expense.createdAt),
      });
    }
  }

  onChangeDescription = (e) => {
    this.setState(() => ({
      description: e.target.value,
    }));
  };

  onChangeNote = (e) => {
    this.setState(() => ({
      note: e.target.value,
    }));
  };

  onChangeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,4}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount: amount,
      }));
    }
  };

  onChangeDate = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };

  onSubmit = (e) => {
    const { description, note, amount, createdAt } = this.state;
    e.preventDefault();
    if (!description || !amount) {
      this.setState(() => {
        return {
          error: "Please provide description and amount",
        };
      });
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: description,
        amount: parseFloat(amount, 10),
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  };

  render() {
    const { description, note, amount, error } = this.state;
    const { expense } = this.props;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onChangeDescription}
          />
          <input
            type="text"
            value={amount}
            onChange={this.onChangeAmount}
            placeholder="Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onChangeDate} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="calendar-id-1" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={note}
            onChange={this.onChangeNote}
            placeholder="Add a note for yopur expense (opcional)"
          />
          <button>{expense ? "Edit expense" : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
