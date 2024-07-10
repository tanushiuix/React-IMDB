import React, { useState, useEffect, useCallback, useRef } from "react";
import SearchInput from "../../components/searchBox/SearchInput";
import Movies from "../../components/movies/Movies";
import { Link } from "react-router-dom";
import useMovieSearch from "../../hooks/useMovieSearch";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import { Search } from "../../types/search";
import { TrendingMovie } from "../../types/movie";

const MovieGallery: React.FC = () => {
  const [movieCards, setMovieCards] = useState<TrendingMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sentinelRef = useRef<HTMLDivElement>(null);

  const { searchResults, showSearchResults, handleSearch } = useMovieSearch();

  const { loading: trendingLoading, movies: trendingMovies } =
    useTrendingMovies({ currentPage });

  useIntersectionObserver(fetchData, sentinelRef, trendingLoading);

  useEffect(fetchData, []);

  useEffect(() => {
    setMovieCards((p) => p.concat(trendingMovies));
  }, [trendingLoading, trendingMovies]);

  function fetchData() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
      handleSearch(event.target.value);
    },
    [handleSearch]
  );

  return (
    <div className="container">
      <img
        src="https://image.tmdb.org/t/p/w1280/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg"
        className="banner_image"
        alt="Banner"
      />

      <div className="search-container">
        <SearchInput value={searchQuery} onChange={handleInputChange} />

        {showSearchResults && searchResults.length > 0 ? (
          <div className="search-results">
            <div className="card-container">
              {searchResults.map((item: Search) => (
                <Movies key={item.id} cardsData={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="card-container">
            {movieCards.map((item: TrendingMovie) => (
              <Link key={item.id} to={"/movies/" + item.id}>
                <Movies cardsData={item} key={item.id} />
              </Link>
            ))}

            <div ref={sentinelRef} />

            {trendingLoading}
          </div>
        )}

        {showSearchResults && searchResults.length === 0 && (
          <div className="no-results">No search related content</div>
        )}
      </div>
    </div>
  );
};

export default MovieGallery;
