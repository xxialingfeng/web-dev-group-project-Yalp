import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import * as businessClient from "../business/client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchTerm, searchLocation } = useParams();
  const [term, setTerm] = useState(searchTerm || "");
  const [location, setLocation] = useState(searchLocation || "");
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const fetchBusinesses = async (term, location) => {
    const results = await businessClient.findBusinesses(term, location);
    setResults(results);
    setTerm(term);
    setLocation(location);
  };

  useEffect(() => {
    if (searchTerm && searchLocation) {
      fetchBusinesses(searchTerm, searchLocation);
    }
  }, [searchTerm, searchLocation]);

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="burgers, sandwiches, beef,etc."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <span className="input-group-text" id="basic-addon1">
        Near
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Where"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={() => navigate(`/search/${term}/${location}`)}
        type="button"
        className="btn btn-danger"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
