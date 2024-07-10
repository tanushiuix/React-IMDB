import React from "react";
import "./cast.css";
import { Cast } from "../../types/cast";

interface ModalCastData {
  castData: Cast;
}

const Cast: React.FC<ModalCastData> = ({ castData }) => {
  if (
    !castData?.original_name ||
    !castData?.character ||
    !castData?.profile_path
  ) {
    return null;
  }

  const imageUrl = castData?.profile_path
    ? `https://image.tmdb.org/t/p/w185/${castData?.profile_path}`
    : "";

  return (
    <div className="casts">
      <img
        src={imageUrl}
        className="cast-image"
        alt={`${castData?.original_name} profile`}
      />
      <span className="name">{castData?.original_name}</span>
      <span className="character">{castData?.character}</span>
    </div>
  );
};

export default Cast;
