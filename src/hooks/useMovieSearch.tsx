import { useState, useCallback } from "react";
import { debounce } from "./useDebounce";
import { Search } from "../types/search";
import { fetchSearchResults } from "../services/searchMovie";

const useMovieSearch = () => {
  const [searchResults, setSearchResults] = useState<Search[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  const debouncedFetchSearchResults = useCallback(
    debounce(async (query: string) => {
      const results = await fetchSearchResults(query);
      setSearchResults(results);
      setShowSearchResults(true);
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
