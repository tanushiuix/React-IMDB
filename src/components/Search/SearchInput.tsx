import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

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
