import { filtersTypes } from "../types";

// SET_TEXT_FILTER
export const setTextFilter = (text = "rent") => ({
  type: filtersTypes.SET_TEXT_FILTER,
  text,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: filtersTypes.SORT_BY_DATE,
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: filtersTypes.SORT_BY_AMOUNT,
});

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: filtersTypes.SET_START_DATE,
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: filtersTypes.SET_END_DATE,
  endDate,
});
