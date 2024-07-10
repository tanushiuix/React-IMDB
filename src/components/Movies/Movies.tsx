import React from "react";
import "./Movies.css";
import { TrendingMovie } from "../../types/movie";
import { Search } from "../../types/search";

interface MoviesProps {
  cardsData: Search | TrendingMovie;
}

const Movies: React.FC<MoviesProps> = ({ cardsData }) => {
  const formattedVoteAverage = cardsData?.vote_average.toFixed(1);

  if (!cardsData?.poster_path) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500/${cardsData?.poster_path}`;

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={cardsData?.original_title}
        className="card-image"
      />
      <label className="votecount">{formattedVoteAverage}</label>
    </div>
  );
};

export default Movies;
