import React from "react";
import UserList from "../Components/UserList";
import ReviewList from "../Components/ReviewList";
import { Link } from "react-router-dom";
function AdminView(props) {
  const user = {
    username: "defaultuser",
  };
  const { username } = user;
  return (
    <div className="">
      <div>Hello, admin {username}!</div>
      <Link to="/users" className="btn btn-warning m-3">
        User Management
      </Link>
      <div>
        <h2>Your Reviews</h2>
        <ReviewList username={props.username} reviews={props.userReviews} />
      </div>
      <div>
        <h2>Recent Reviews</h2>
        <ReviewList username={props.username} reviews={props.recentReviews} />
      </div>

      <div>
        <h2>Manage Users</h2>
        <UserList users={props.users} />
      </div>
    </div>
  );
}

export default AdminView;
