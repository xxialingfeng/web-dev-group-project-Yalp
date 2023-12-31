import React from "react";
import ReviewList from "../Components/ReviewList";

function UserView(props) {
  // const user = {
  //   username: "defaultuser",
  // };
  // const { username } = user;
  return (
    <div className="">
      <div className="mt-3 mb-3">
        Dear, user <span className="text-danger">{props.username}</span>!
      </div>
      <div>
        <h2>Your Reviews</h2>
        <ReviewList username={props.username} reviews={props.userReviews} />
      </div>
      <div>
        <h2>Recent Reviews</h2>
        <ReviewList username={props.username} reviews={props.recentReviews} />
      </div>
    </div>
  );
}

export default UserView;
