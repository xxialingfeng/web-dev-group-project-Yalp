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

  const tags = (b) => {
    b.categories.map((category) => (
      <span className="badge badge-secondary" key={b.id + category.title}>
        {category.title}
      </span>
    ));
  };

  useEffect(() => {
    if (searchTerm && searchLocation) {
      fetchBusinesses(searchTerm, searchLocation);
    }
  }, [searchTerm, searchLocation]);

  return (
    <div className="container">
      <div className="input-group mb-3 mt-5 navbar">
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
          className="form-control me-2"
          placeholder="Where"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={() => navigate(`/search/${term}/${location}`)}
          type="button"
          className="btn btn-outline-danger"
        >
          <FaSearch />
        </button>
      </div>
      <h2>Search Results</h2>
      <div>
        {results &&
          results.businesses.map((b) => (
            <div
              key={b.id}
              className="card mb-4 h-60"
              style={{ "max-width": "1000px" }}
            >
              <div className="row g-0">
                <div className="col-lg-4">
                  <Link to={`/details/${b.id}`}>
                    <img
                      src={b.image_url}
                      className="img-fluid rounded-start business-image"
                      alt="business"
                    />
                  </Link>
                </div>
                <div className="col-lg-4">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        className="link-dark fw-bold link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
                        to={`/details/${b.id}`}
                      >
                        {b.name}
                      </Link>
                    </h5>
                    <div className="card-text">
                      <p>Rating: {b.rating}</p>
                      <p>Price: {b.price}</p>
                      <>
                        {b.categories &&
                          b.categories.map((category) => (
                            <span
                              className="badge text-bg-secondary ms-1"
                              key={b.id + category.title}
                            >
                              {category.title}
                            </span>
                          ))}
                      </>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  {b.location.display_address} <br />
                  {b.phone}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
