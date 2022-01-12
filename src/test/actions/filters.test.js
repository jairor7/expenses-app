import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
} from "../../store/redux/actions/filters";
import moment from "moment";

test("should sort expenses by date", () => {
  const actionSortByDate = sortByDate();
  expect(actionSortByDate).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should sort expenses by amount", () => {
  const actionSortByAmount = sortByAmount();
  expect(actionSortByAmount).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should generate set text filter action object", () => {
  const text = "date";
  const actionFilterText = setTextFilter(text);
  expect(actionFilterText).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should generate set star date action object", () => {
  const startDate = moment(0);
  const actionStartDate = setStartDate(startDate);
  expect(actionStartDate).toEqual({
    type: "SET_START_DATE",
    startDate,
  });
});

test("should generate set star date action object default", () => {
  const actionStartDate = setStartDate();
  expect(actionStartDate).toEqual({
    type: "SET_START_DATE",
    startDate: undefined,
  });
});

test("should generate set end date action object", () => {
  const endDate = "3000";
  const actionEndDate = setEndDate(endDate);
  expect(actionEndDate).toEqual({
    type: "SET_END_DATE",
    endDate,
  });
});
