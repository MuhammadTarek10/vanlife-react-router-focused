import { useOutletContext } from "react-router-dom";

export const HostVansPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="host-van-detail-images">
      <img
        src={currentVan.imageUrl}
        alt="Van"
        className="host-van-detail-image"
      />
    </div>
  );
};
