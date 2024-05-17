import { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { getHostVans } from "../../data/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return defer({ vans: getHostVans() });
}

export const HostVans = () => {
  const data = useLoaderData();

  return (
    <div className="van-list-container">
      <h1>Explore our vans options</h1>
      <Suspense fallback={<Loading />}>
        <Await resolve={data.vans}>
          {(vans) => {
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
                    <i className={`van-type ${van.type} selected`}>
                      {van.type}
                    </i>
                  </div>
                </Link>
              </div>
            ));
            return <div className="van-list">{vanElements}</div>;
          }}
        </Await>
      </Suspense>
    </div>
  );
};
