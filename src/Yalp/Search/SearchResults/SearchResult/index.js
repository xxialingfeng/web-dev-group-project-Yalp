import React from "react";
import img from "./logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.jpg";
import { faFaceSmile, faStar } from "@fortawesome/free-solid-svg-icons";
import BusinessRating from "../../../BusinessRating";

function SearchResult() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h2>Burger Place</h2>
        <p class="card-text">
          <BusinessRating />
        </p>
        <p class="card-text">$$</p>
      </div>
      <p class="card-text">addressData</p>
    </div>
  );
}

export default SearchResult;
