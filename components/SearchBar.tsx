"use client";

import { useState } from "react";
import { SearchManufacturer} from './index'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};
  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="search__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
