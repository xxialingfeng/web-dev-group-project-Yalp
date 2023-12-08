import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as reviewClient from "./reviews/client";
import * as businessClient from "./business/client";
import "./details.css";

function Details() {
  //TODO: get current user from context
  const currentUser = { id: "1", name: "test user", email: "123@gmail.com" };
  const { businessId } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [reviewContent, setReviewContent] = useState(null);

  const fetchBusinessById = async () => {
    const response = await businessClient.findBusinessById(businessId);
    setBusiness(response);
  };

  const fetchReviewsByBusinessId = async () => {
    const response = await reviewClient.findAllReviewsByRestaurantId(
      businessId
    );
    setReviews(response);
  };

  const createReview = async () => {
    const response = await reviewClient.createReview(
      currentUser.id,
      businessId,
      reviewContent
    );
    setReviews([...reviews, response]);
  };
  const deleteReview = async () => {
    const status = await reviewClient.deleteReview(currentUser.id, businessId);
  };
  const updateReview = async () => {
    const status = await reviewClient.updateReview(
      currentUser.id,
      businessId,
      reviewContent
    );
  };
  const fetchReviewByUserId = async () => {
    const response = await reviewClient.findReviewByUserId(businessId);
    setReviewContent(response.content);
  };

  useEffect(() => {
    fetchBusinessById();
    fetchReviewsByBusinessId();
    fetchReviewByUserId();
  }, []);

  return (
    <div className="container">
      <div>
        {business && (
          <div className="d-flex">
            <div>
              <h2>
                <Link to={business.url} className="fs-2">
                  {business.name}
                </Link>
              </h2>
              <img
                className="details-img"
                src={business.image_url}
                alt="business"
              />
            </div>
            <div>
              <ul class="list-group">
                <li class="list-group-item">
                  {business.location.display_address}
                </li>
                <li class="list-group-item">{business.display_phone}</li>
                <li class="list-group-item">
                  {business.categories.map((category) => (
                    <span key={category.title}>{category.title}</span>
                  ))}
                </li>
                <li class="list-group-item">{business.price}</li>
                <li class="list-group-item">{business.rating}</li>
                <li class="list-group-item">{business.review_count}</li>
                <li class="list-group-item">{business.transactions}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1>Reviews</h1>
        <h2>Write a Review</h2>
        <button className="btn btn-warning float-end" onClick={createReview}>
          Write a review
        </button>

        <input
          value={reviewContent}
          className="form-control"
          placeholder="write a review"
          onChange={(e) => setReviewContent(e.target.value)}
        />
        <button className="btn btn-success float-end" onClick={updateReview}>
          Update
        </button>

        <h2>All the Reviews</h2>
        <div>
          {reviews &&
            reviews.map((review) => (
              <div key={review.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Created By:
                      <Link to="/profile/{review.userId}">{review.userId}</Link>
                    </h5>
                    <p className="card-text">{review.content}</p>
                    {review.userId == currentUser.id && (
                      <>
                        <button
                          className="btn btn-primary float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            setReviewContent(review.content);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger float-end"
                          onClick={deleteReview}
                        >
                          delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
