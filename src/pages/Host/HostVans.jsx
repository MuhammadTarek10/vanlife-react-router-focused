import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../data/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return getHostVans();
}

export const HostVans = () => {
  const vans = useLoaderData();

  const vanElements = vans.map((van) => (
    <div key={van.id} className="host-van-link-wrapper">
      <Link to={van.id}>
        <div className="host-van-single">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our vans options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
