import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to=".">
          <h1>#VANLIFE</h1>
        </Link>
        <div className="links">
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
        </div>
      </nav>
    </header>
  );
};
