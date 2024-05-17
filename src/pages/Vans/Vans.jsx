/* eslint-disable react/prop-types */
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../../data/api";
import { requireAuth } from "../../utils/utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(request) {
  await requireAuth(request);
  return defer({ vans: getVans() });
}

export const Vans = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  function handleFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our vans options</h1>
      <Await resolve={data.vans}>
        {(vans) => {
          const searchedVans = typeFilter
            ? vans.filter((van) => van.type == typeFilter)
            : vans;

          const vanElements = searchedVans.map((van) => (
            <div key={van.id} className="van-title">
              <Link
                to={van.id}
                state={{ search: searchParams.toString(), type: typeFilter }}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                  <h3>{van.name}</h3>
                  <p>
                    ${van.price}
                    <span>/day</span>
                  </p>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
              </Link>
            </div>
          ));
          return (
            <>
              <div className="van-list-filter-buttons">
                <button
                  onClick={() => handleFilter("type", "simple")}
                  className={`van-type simple ${
                    typeFilter === "simple" ? "selected" : null
                  }`}>
                  Simple
                </button>
                <button
                  onClick={() => handleFilter("type", "rugged")}
                  className={`van-type rugged ${
                    typeFilter === "rugged" ? "selected" : null
                  }`}>
                  Rugged
                </button>
                <button
                  onClick={() => handleFilter("type", "luxury")}
                  className={`van-type luxury ${
                    typeFilter === "luxury" ? "selected" : null
                  }`}>
                  Luxury
                </button>
                {typeFilter ? (
                  <button
                    onClick={() => handleFilter("type", null)}
                    className="van-type clear-filters">
                    Clear all filters
                  </button>
                ) : null}
              </div>
              <div className="van-list">{vanElements}</div>
            </>
          );
        }}
      </Await>
    </div>
  );
};
