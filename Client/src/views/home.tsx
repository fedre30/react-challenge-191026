import React from "react";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <>
      <h1>This is a home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/list">Liste</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
