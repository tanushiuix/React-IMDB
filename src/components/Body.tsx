import React, { useState, useEffect, useCallback } from "react";
import SearchInput from "./Search/SearchInput";
import Cards from "./Movies/Movies";
import { Link } from "react-router-dom";
import MovieSearch from "./Search/SearchComponent";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Body: React.FC = () => {
  const [cards, setCards] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { searchResults, showSearchResults, handleSearch } = MovieSearch();

  useEffect(() => {
    fetchData();
  }, []);

  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI3Y2Y0ZTlmM2Y2ZTBkNTA2NWQwYmE2ZDlkNDAxMSIsIm5iZiI6MTcyMDQxODE2Ni4yMDgxNDgsInN1YiI6IjY2ODhlYTc2NDQxZGY4OTVhMjQ5OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkaqOaGjWTs8p7J7DKRV_ycX2rfZOzAYwK6yussggto";
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchData = async () => {
    try {
      const data = await fetch(
        `${baseUrl}/movie/popular?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await data.json();
      setCards(res.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

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
        {showSearchResults && searchResults.length > 0 && (
          <div className="search-results">
            <div className="card-container">
              {searchResults.map((item) => (
                <Cards key={item.id} cardsData={item} />
              ))}
            </div>
          </div>
        )}

        {!showSearchResults && (
          <div className="card-container">
            {cards.map((item: Movie) => (
              <Link key={item.id} to={"/movies/" + item.id}>
                <Cards cardsData={item} />
              </Link>
            ))}
          </div>
        )}

        {showSearchResults && searchResults.length === 0 && (
          <div className="no-results">No search related content</div>
        )}
      </div>
    </div>
  );
};

export default Body;
