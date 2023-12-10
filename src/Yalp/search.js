import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import * as businessClient from "./business/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./search.css";

function Search() {
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
    <div className="container">
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
      <h1 className="title">Search Results</h1>
      <div>
        {results &&
          results.businesses.map((b) => (
            <div key={b.id} className="row mb-2 search-result">
              <div className="col">
                <Link to={`/details/${b.id}`}>
                  <img
                    src={b.image_url}
                    alt="business"
                    className="business-image"
                  />
                </Link>
              </div>
              <div className="col business-info align-top">
                <h2 className="align-top">{b.name}</h2>
                <h3>Rating: {b.rating}</h3>
                {/* <h3>Review Count: {b.review_count}</h3> */}
                <p>
                  {b.price}
                  {/* {tags(b)} */}
                </p>
              </div>

              <div className="col contact-info">
                <p>{b.phone}</p>
                <p>
                  {b.location.address1}, {b.location.city}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
