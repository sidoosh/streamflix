import React from "react";
import "./search.css";
interface SearchProps {
  searchTerm: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const Search: React.FC<SearchProps> = (props: SearchProps) => {
  return (
    <div className="search-container">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          placeholder="Search"
          value={props.searchTerm}
          onChange={props.handleSearch}
          // onSubmit={handleSear}
        />
      </label>
    </div>
  );
};

export default Search;
