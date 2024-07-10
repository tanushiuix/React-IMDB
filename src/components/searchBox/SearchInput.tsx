import React from "react";
import "./Search.css";

interface SearchModal {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<SearchModal> = ({ value, onChange }) => {
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
