import React from "react";
import ReviewCard from "./ReviewCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
function ReviewList(props) {
  // console.log("reviewlist", reviews);
  return (
    <div className="d-flex row">
      {props.reviews.map((review, index) => (
        <div className="col col-sm-12 col-md-6  col-lg-4  col-xl-3 m-3">
          <Card style={{ width: "300px" }}>
            <Card.Img
              variant="top"
              src={review.img}
              // src="https://picsum.photos/300/200"
              className="overflow-hidden"
            />
            <Card.Body>
              <Card.Title>{review.title} </Card.Title>
              <p className="text-secondary">
                <Link
                  to={`/profile/${review.userId}`}
                  className="text-decoration-none"
                >
                  {review.username}
                </Link>{" "}
                wrote a review for{" "}
                <Link
                  to={`/details/${review.restaurantId}`}
                  className="text-decoration-none"
                >
                  {review.restaurantName}
                </Link>{" "}
                on {review.date.slice(0, 10)}
              </p>
              <Card.Text>{review.content}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
