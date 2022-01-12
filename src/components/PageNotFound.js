import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        Page not found
        <Link to={"/"}>Go to home</Link>
      </div>
    );
  }
}
