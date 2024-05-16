import { useOutletContext } from "react-router-dom";

export const HostVansPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${currentVan.price} <span>/day</span>
    </h3>
  );
};
