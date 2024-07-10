import React from "react";
import CardsProps from "./types";
import "./Movies.css";

const Movies: React.FC<CardsProps> = ({ cardsData }) => {
  const { original_title, poster_path, vote_average } = cardsData;
  const formattedVoteAverage = vote_average.toFixed(1);

  if (!poster_path) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={original_title} className="card-image" />
      <label className="votecount">{formattedVoteAverage}</label>
    </div>
  );
};

export default Movies;
