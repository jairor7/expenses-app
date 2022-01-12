import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import store from "./store/configureStore";
import { addExpense } from "./store/redux/actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// Date pickers
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

// const store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
    note: "This is the note",
    createdAt: 1000,
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 2000,
    note: "This is the note gass bill",
    createdAt: 2000,
  })
);

// store.dispatch(
//   addExpense({
//     description: "Rent",
//     amount: 9000,
//     note: "This is the note 2",
//     createdAt: 3000,
//   })
// );

// console.log("Objets", getVisibleExpenses(store.getState()));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
