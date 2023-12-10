import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../Database";
import * as client from "../client";

function ReviewList() {
  const { restaurantId } = useParams();
  // const reviews = db.reviews.filter(
  //   (review) => review.restaurant_id === restaurantId
  // );
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    client
      .findReviewsForRestaurant(restaurantId)
      .then((reviews) => setReviews(reviews));
  }, []);
  return (
    <>
      <div className="postReview form-control d-flex mb-3">
        <div className="d-flex">
          <img
            src="/images/userIcon.png"
            alt=""
            width={50}
            height={50}
            className="me-3"
          />
          <div className="me-3">
            <div className="">
              <strong>Kevin</strong>
            </div>
            <div className="text-secondary">Boston, MA</div>
          </div>
        </div>
        <div className="col">
          <textarea
            className="form-control col mb-3"
            name=""
            id=""
            placeholder="Share your experience with the restaurant. What did you like? Any suggestions or feedback? "
            cols="50"
            rows=""
          ></textarea>
          <div className="d-flex ">
            <div className="me-3 mb-1">🌟🌟🌟🌟🌟</div>
            <div className="mb-2 text-secondary">Select your rating</div>
          </div>
          <button className="btn btn-success">Post Review</button>
        </div>
      </div>

      <div className="filterReview d-flex justify-content-between mb-3">
        <div className="d-flex">
          <button className="btn btn-secondary me-2">Yelp Sort</button>
          <button className="btn btn-secondary me-2">English (900)</button>
          <button className="btn btn-secondary me-2">5 stars</button>
        </div>

        <div className="d-flex ">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search reviews"
          />
          <button className="btn btn-secondary me-2">Search</button>
        </div>
      </div>

      <ul className="list-group">
        {reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            <h3>{review.title}</h3>
            <p>{review.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
