import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
        <div className="links">
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
};
