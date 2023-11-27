import React from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function BusinessRating() {
  return (
    <div className="d-flex">
      <Rating
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        fractions={2}
        readonly
        initialRating={3}
      />
      <p>3 Reviews</p>
    </div>
  );
}

export default BusinessRating;
