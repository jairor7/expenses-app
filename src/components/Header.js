import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to={"/"}>Dashboard</NavLink>
      <NavLink to={"/createExpense"}>Create Expense</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;
