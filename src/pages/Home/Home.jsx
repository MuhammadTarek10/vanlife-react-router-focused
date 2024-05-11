import { Link } from "react-router-dom";
import { Vans } from "../Vans/Vans";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>You Got the travel plans, We Got the travel Vans</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        incidunt quas quis non ad quos nemo nulla repudiandae deserunt neque.
        Sequi voluptatem illum minus natus saepe asperiores dolorum, totam odio.
      </p>
      <div className="find-button-container">
        <Link className="find-button" to="/vans" element={<Vans />}>
          Find Your Van
        </Link>
      </div>
    </div>
  );
};
