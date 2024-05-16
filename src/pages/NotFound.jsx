import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Sorry, There is no page here</h1>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </div>
  );
};
export default NotFound;
