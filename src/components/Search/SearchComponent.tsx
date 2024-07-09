import React, { useState, useCallback } from "react";
import { debounce } from "../../utils/useDebounce";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieSearch = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [apiKey] = useState<string>(
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI3Y2Y0ZTlmM2Y2ZTBkNTA2NWQwYmE2ZDlkNDAxMSIsIm5iZiI6MTcyMDQxODE2Ni4yMDgxNDgsInN1YiI6IjY2ODhlYTc2NDQxZGY4OTVhMjQ5OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkaqOaGjWTs8p7J7DKRV_ycX2rfZOzAYwK6yussggto"
  );
  const [baseUrl] = useState<string>("https://api.themoviedb.org/3");

  const debouncedFetchSearchResults = useCallback(
    debounce(async (query: string) => {
      try {
        const response = await fetch(
          `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSearchResults(data.results);
        setShowSearchResults(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
        setShowSearchResults(false);
      }
    }, 500),
    [apiKey, baseUrl]
  );

  const handleSearch = useCallback(
    async (query: string) => {
      if (query.trim().length > 0) {
        debouncedFetchSearchResults(query.trim());
      } else {
        setShowSearchResults(false);
        setSearchResults([]);
      }
    },
    [debouncedFetchSearchResults]
  );

  return { searchResults, showSearchResults, handleSearch };
};

export default MovieSearch;
