import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <h1>This is a home</h1>{" "}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  </>
);
