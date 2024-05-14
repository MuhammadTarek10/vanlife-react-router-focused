/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetailsLayout = () => {
  const { id } = useParams();

  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) return <h1>Loading...</h1>;

  return (
    <>
      <section>
        <Link to=".." className="back-button">
          &larr; Back to all vans
        </Link>
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
      </section>
      <div className="host-van-detail-nav">
        <NavLink
          to="."
          end
          className={(isActive) => (isActive ? "active-link" : "")}>
          Details
        </NavLink>
        <NavLink
          to="photos"
          className={(isActive) => (isActive ? "active-link" : "")}>
          Photos
        </NavLink>
        <NavLink
          to="pricing"
          className={(isActive) => (isActive ? "active-link" : "")}>
          Pricing
        </NavLink>
      </div>
      <Outlet context={{ currentVan }} />
    </>
  );
};
export default HostVanDetailsLayout;
