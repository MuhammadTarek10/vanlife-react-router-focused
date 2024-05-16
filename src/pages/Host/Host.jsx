import { NavLink, Outlet } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import HostVans from "./HostVans";
import { Income } from "./Income";
import { Reviews } from "./Reviews";

export const Host = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          className={(isActive) => (isActive ? "active-link" : null)}
          to="."
          end
          element={<Dashboard />}>
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
          element={<Reviews />}>
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
          element={<HostVans />}>
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
          element={<Income />}>
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
