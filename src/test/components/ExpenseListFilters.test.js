import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import toJSON from "enzyme-to-json";
import { expenses } from "../fixtures/expenses";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseListFilters with altFilters correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const focusedInput = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    focusedInput
  );
  expect(wrapper.state("focusedInput")).toBe(focusedInput);
});
