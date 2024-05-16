import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

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
export default HostVans;
