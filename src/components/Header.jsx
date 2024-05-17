import { Link, NavLink } from "react-router-dom";

import avatarImage from "../assets/images/avatar-icon.png";

export const Header = () => {
  function fakeLogout() {
    localStorage.removeItem("loggedIn");
  }

  return (
    <header>
      <nav>
        <Link to=".">
          <h1>#VANLIFE</h1>
        </Link>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host">
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/vans">
          Vans
        </NavLink>
        <Link to="/login">
          <img src={avatarImage} alt="User" className="login-icon" />
        </Link>
        <button className="van-type clear-filters" onClick={fakeLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};
