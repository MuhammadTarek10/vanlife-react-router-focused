import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const VanDetails = () => {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr;{` Back to ${type} vans`}
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this Van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
