import { useState, useCallback } from "react";
import { debounce } from "./useDebounce";
import { apiKey, baseUrl } from "../utils/constants";
import { Movie } from "../types/cast";
import { options } from "../utils/constants";

const useMovieSearch = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  const debouncedFetchSearchResults = useCallback(
    debounce(async (query: string) => {
      try {
        const response = await fetch(
          `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options
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
    []
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

export default useMovieSearch;
