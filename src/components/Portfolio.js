import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const changeRouter = () => {
    console.log("navi.push");
    navigate("/about");
  };

  return (
    <div>
      {id ? (
        <div>
          <h1>A thing I've Done</h1>
          <p>This page if for the item with id of {id}</p>
        </div>
      ) : (
        <div>
          <h1>My Work</h1>
          <p>Checkout the following things I've done:</p>
          <Link to="/portfolio/1">Item One</Link>
          <Link to="/portfolio/2">Item Two</Link>
          {/* Edit pruebas {id}
        <button onClick={() => changeRouter()}>Home</button> */}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
