import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../Components/ReviewList";

function AnonView(props) {
  return (
    <div className="border-1">
      <div className="m-2">
        Hello, visiter! Please <Link to={"/login"}>login</Link> or{" "}
        <Link to={"/singup"}>signup</Link>.
      </div>
      <h2>Recent Reviews</h2>
      <ReviewList reviews={props.recentReviews} />
    </div>
  );
}

export default AnonView;
