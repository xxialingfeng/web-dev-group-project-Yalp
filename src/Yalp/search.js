import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import * as client from "./client";
import styles from "./search.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const { searchTerm, searchLocation } = useParams();
  const [term, setTerm] = useState(searchTerm || "");
  const [location, setLocation] = useState(searchLocation || "");
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const fetchBusinesses = async (term, location) => {
    const results = await client.findBusinesses(term, location);
    setResults(results);
    setTerm(term);
    setLocation(location);
  };

  useEffect(() => {
    if (searchTerm && searchLocation) {
      console.log("searchTerm", searchTerm);
      console.log("searchLocation", searchLocation);
      fetchBusinesses(searchTerm, searchLocation);
    }
  }, [searchTerm, searchLocation]);

  const tags = (b) => {
    b.categories.map((category) => (
      <span
        className={`tag ${styles["business-tag"]}`}
        key={b.id + category.title}
      >
        {category.title}
      </span>
    ));
  };

  return (
    <div className="container">
      <pre>{process.env.REACT_APP_YELP_API_KEY}</pre>
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
      <div>
        {results &&
          results.businesses.map((b) => (
            <div key={b.id} className={styles["search-result"]}>
              <Link to={`/details/${b.id}`}>
                <img
                  src={b.image_url}
                  alt="business"
                  className={styles["business-image"]}
                />
              </Link>
              <div className={styles["business-info"]}>
                <h2 className="subtitle">{b.name}</h2>
                <h3>Rating: {b.rating}</h3>
                <h3>Review Count: {b.review_count}</h3>
                <p>
                  {b.price} {tags(b)}
                </p>
              </div>

              <div className={styles["contact-info"]}>
                <p>{b.phone}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
