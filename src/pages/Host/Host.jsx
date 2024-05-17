import { NavLink, Outlet } from "react-router-dom";

export const Host = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-link" : null)}>
          Dashboard
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active-link" : null)}>
          Reviews
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}>
          Vans
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active-link" : null)}>
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
