import React from "react";

interface CastProps {
  castData: {
    character?: string;
    original_name?: string;
    profile_path?: string;
  };
}

const Casts: React.FC<CastProps> = ({ castData }) => {
  const { character, original_name, profile_path } = castData;

  if (!original_name || !character || !profile_path) {
    return null;
  }

  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
    : "";

  return (
    <div className="casts">
      <div className="cast">
        <img
          src={imageUrl}
          className="cast-image"
          alt={`${original_name} profile`}
        />
        <h3 className="name">{original_name}</h3>
        <h4 className="character">{character}</h4>
      </div>
    </div>
  );
};

export default Casts;
