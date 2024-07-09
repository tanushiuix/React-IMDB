import React from "react";

interface CardsProps {
  cardsData: {
    original_title: string;
    poster_path: string;
    vote_average: number;
  };
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
  const { original_title, poster_path, vote_average } = cardsData;
  const formattedVoteAverage = vote_average.toFixed(1);

  if (!poster_path) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="cards">
      <div className="card">
        <img src={imageUrl} alt={original_title} className="card-image" />
        <label className="votecount">{formattedVoteAverage}</label>
      </div>
    </div>
  );
};

export default Cards;
