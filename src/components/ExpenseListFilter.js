import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
  setStartDate,
} from "../store/redux/actions/filters";
import "react-dates/initialize";

export class ExpenseListFilter extends React.Component {
  state = {
    focusedInput: null,
  };
  onChangeValueFilter = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onChangeSelectFilter = (e) => {
    const filterOption = e.target.value;
    if (filterOption === "date") {
      this.props.sortByDate();
    } else if (filterOption === "amount") {
      this.props.sortByAmount();
    }
  };
  onChangeDates = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  render() {
    const { filters } = this.props;
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onChangeValueFilter}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onChangeSelectFilter}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={filters.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onChangeDates} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          small={true}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
