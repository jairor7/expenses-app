import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import ExpenseDashboard from "../components/ExpenseDashboard";
import Contact from "../components/Contact";
import CreateExpense from "../components/CreateExpense";
import EditExpense from "../components/EditExpense";
import Header from "../components/Header";
import { createBrowserHistory } from "history";

export default class AppRouter extends Component {
  render() {
    let history = createBrowserHistory();
    return (
      <BrowserRouter history={history}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ExpenseDashboard />} />
            <Route path="/createExpense" element={<CreateExpense />} />
            <Route path="/editExpense/:id" element={<EditExpense />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
