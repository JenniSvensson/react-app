import React from "react";
import "../App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <NavLink activeClassName="App-link-active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="App-link-active" to="/discover">
        Discover
      </NavLink>

      <NavLink activeClassName="App-link-active" to="/about">
        About
      </NavLink>
    </div>
  );
}
