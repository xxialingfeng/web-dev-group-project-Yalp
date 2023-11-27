import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as client from "./client";

function Details() {
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { businessId } = useParams();

  const fetchBusinessById = async () => {
    const response = await client.findBusinessById(businessId);
    setBusiness(response);
  };

  const fetchReviewsById = async () => {
    const response = await client.findReviewById(businessId);
    setReviews(response);
  };

  useEffect(() => {
    fetchBusinessById();
    fetchReviewsById();
  }, []);

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(business, null, 2)}</pre> */}
      <div>
        {business && (
          <div>
            <h1>{business.name}</h1>
            <img src={business.image_url} alt="business" />
            <p>{business.location.display_address}</p>
            <p>{business.display_phone}</p>
            <p>
              {business.categories.map((category) => (
                <span>{category.title}</span>
              ))}
            </p>
            <p>{business.price}</p>
            <p>{business.rating}</p>
            <p>{business.review_count}</p>
            <p>{business.url}</p>
            <p>{business.transactions}</p>
          </div>
        )}
      </div>
      <div>
        <h1>Reviews</h1>
        {/* <pre>{JSON.stringify(reviews, null, 2)}</pre> */}
        {reviews && (
          <div>
            {reviews.map((review) => (
              <div>
                <h3>User Name: {review.user.name}</h3>
                <p>Review: {review.text}</p>
                <p>Rating: {review.rating}</p>
                <p>Created Time:{review.time_created}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
