import { createStore, combineReducers } from "redux";
import expensesReducer from "./redux/reducers/expenses";
import filtersReducer from "./redux/reducers/filters";

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
