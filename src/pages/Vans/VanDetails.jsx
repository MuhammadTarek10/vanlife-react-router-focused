import { Link, useLoaderData, useLocation } from "react-router-dom";
import { requireAuth } from "../../utils/utils";
import { getVans } from "../../data/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  await requireAuth();
  return getVans(params.id);
}

export const VanDetails = () => {
  const van = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr;{` Back to ${type} vans`}
      </Link>
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
    </div>
  );
};
