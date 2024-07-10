import React from "react";
import "./Search.css";
import SearchInputProps from "./types";

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="search-input"
      placeholder="search for a movie"
    />
  );
};

export default SearchInput;
