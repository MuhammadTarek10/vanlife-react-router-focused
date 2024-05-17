import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Loading } from "../../components/Loading";
import { getVans } from "../../data/api";
import { requireAuth } from "../../utils/utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  await requireAuth({ request });
  return defer({ van: getVans(params.id) });
}

export const VanDetails = () => {
  const data = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr;{` Back to ${type} vans`}
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={data.van}>
          {(van) => {
            return (
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
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
