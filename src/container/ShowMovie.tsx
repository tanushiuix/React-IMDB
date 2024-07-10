import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";
import { Movie } from "../types/types";
import useTrendingMovies from "../hooks/useTrendingMovies";

const ShowMovie: React.FC<{ apiKey: string }> = ({ apiKey }) => {
  const [cards, setCards] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const { loading: trendingLoading, movies: trendingMovies } =
    useTrendingMovies({ currentPage });

  useEffect(() => {
    if (trendingMovies) {
      setCards((prevCards) => [...prevCards, ...trendingMovies]);
    }
  }, [trendingMovies]);

  useEffect(() => {
    setTotalPages(currentPage);
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="card-container">
      {cards.map((item: Movie) => (
        <Link key={item.id} to={`/movies/${item.id}`}>
          <Movies cardsData={item} />
        </Link>
      ))}

      {(loading || trendingLoading) && <p>Loading...</p>}

      {currentPage < totalPages && !loading && (
        <button onClick={loadMore} className="load-more-btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default ShowMovie;
