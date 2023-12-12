import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as reviewClient from "./reviews/client";
import * as businessClient from "./business/client";
import { useSelector, useDispatch, Provider } from "react-redux";
import Search from "./search";
import "./details.css";

function Details() {
  //TODO: get current user from context
  const { currentUser } = useSelector((state) => state.userReducer);
  // const currentUser = { id: "1", name: "test user", email: "123@gmail.com" };
  const { businessId } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [reviewContent, setReviewContent] = useState(null);
  const navigate = useNavigate();

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
      currentUser._id,
      currentUser.username,
      businessId,
      reviewContent
    );
    setReviews([...reviews, response]);
    setReviewContent("");
  };
  const deleteReview = async () => {
    const status = await reviewClient.deleteReview(currentUser._id, businessId);
    setReviews(reviews.filter((review) => review.userId !== currentUser._id));
  };
  const updateReview = async () => {
    const status = await reviewClient.updateReview(
      currentUser._id,
      businessId,
      reviewContent
    );
    setReviews(
      reviews.map((review) =>
        review.userId === currentUser._id
          ? { ...review, content: reviewContent }
          : review
      )
    );
  };
  const fetchReviewByUserId = async () => {
    const response = await reviewClient.findReviewByUserId(businessId);
    setReviewContent(response.content);
  };

  const handleWriteAReview = () => {
    if (currentUser) {
      createReview();
    } else {
      alert("Please login first");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchBusinessById();
    fetchReviewsByBusinessId();
    fetchReviewByUserId();
  }, []);

  return (
    <div className="container">
      <div>
        <Search />
        {business && (
          <div>
            <Link to={business.url}>
              <div className="card h-80" style={{ "max-width": "1000px" }}>
                <div className="row g-0">
                  <div className="col-md-6 mt-3 mb-3">
                    <img
                      src={business.image_url}
                      className="business-image img-fluid rounded-start align-middle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h3 className="fw-bold">{business.name}</h3>
                      <ul class="list-group mb-0">
                        <li class="list-group-item mb-0 text-bg-light text-decoration-none">
                          Address: {business.location.display_address}
                        </li>
                        <li class="list-group-item mb-0 text-bg-light">
                          Phone: {business.display_phone}
                        </li>
                        <li class="list-group-item mb-0 text-bg-light">
                          Rating: {business.rating}
                        </li>
                        <li class="list-group-item mb-0 text-bg-light">
                          Price: {business.price}
                        </li>
                        {/* <li class="list-group-item mb-0 text-bg-light">
                        And a fifth one
                      </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      <div>
        <h1 className="mt-5">Write a Review</h1>
        <button
          className="btn btn-danger float-end mb-2"
          onClick={handleWriteAReview}
        >
          Write a review
        </button>

        <input
          value={reviewContent}
          className="form-control mb-3"
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
                      <Link to="/profile/{review.userId}">
                        {review.username}
                      </Link>
                    </h5>
                    <p className="card-text">{review.content}</p>
                    {currentUser && review.userId === currentUser._id && (
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
