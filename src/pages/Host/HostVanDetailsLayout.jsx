/* eslint-disable react/prop-types */
import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { Loading } from "../../components/Loading";
import { getHostVans } from "../../data/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  return defer({ van: getHostVans(params.id) });
}

export const HostVanDetailsLayout = () => {
  const data = useLoaderData();

  return (
    <>
      <Link to=".." className="back-button">
        &larr; Back to all vans
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={data.van}>
          {(currentVan) => {
            return (
              <>
                <div className="host-van-detail-layout-container">
                  <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                      <i className={`van-type van-type-${currentVan.type}`}>
                        {currentVan.type}
                      </i>
                      <h3>{currentVan.name}</h3>
                      <h4>{currentVan.price}</h4>
                    </div>
                  </div>
                </div>
                <div className="host-van-detail-nav">
                  <NavLink
                    to="."
                    end
                    className={(isActive) => (isActive ? "active-link" : null)}>
                    Details
                  </NavLink>
                  <NavLink
                    to="photos"
                    end
                    className={(isActive) => (isActive ? "active-link" : null)}>
                    Photos
                  </NavLink>
                  <NavLink
                    to="pricing"
                    end
                    className={(isActive) => (isActive ? "active-link" : null)}>
                    Pricing
                  </NavLink>
                </div>
                <Outlet context={{ currentVan }} />
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};
