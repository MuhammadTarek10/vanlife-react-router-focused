import { Link, Outlet } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Income } from "./Income";
import { Reviews } from "./Reviews";

export const Host = () => {
  return (
    <>
      <nav className="host-nav">
        <Link to="/host" element={<Dashboard />}>
          Dashboard
        </Link>
        <Link to="/host/reviews" element={<Reviews />}>
          Reviews
        </Link>
        <Link to="/host/income" element={<Income />}>
          Income
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
