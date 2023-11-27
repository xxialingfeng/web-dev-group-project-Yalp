import { useBusinessSearch } from "../Hooks/YalpApi/useBusinessSearch";
import React from "react";
import NavBar from "./NavBar";
import YalpNavigation from "../YalpNavigation";
import SearchResultsSummary from "./SearchResultsSummary";
import SearchReuslts from "./SearchResults";
// import useReactRouter from "use-react-router";
import { useState, useEffect } from "react";

function Search() {
  // const { location, history } = useReactRouter();
  // const params = new URLSearchParams(location.search);
  // const term = params.get("find_desc");
  // const locationParam = params.get("find_loc");
  // const [businesses, amountResults, searchParams, performSearch] =
  //   useBusinessSearch(term, locationParam);

  return (
    <div>
      <h1>Search Page</h1>
      {/* <NavBar /> */}
      <YalpNavigation />
      {/* <SearchResultsSummary /> */}
      {<SearchReuslts />}
    </div>
  );
}

export default Search;
