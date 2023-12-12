import React from "react";
import UserList from "../Components/UserList";
import ReviewList from "../Components/ReviewList";
import { Link } from "react-router-dom";
import Table from "../Users/table";
function AdminView(props) {
  // const user = {
  //   username: "defaultuser",
  // };
  // const { username } = user;
  return (
    <div className="">
      <div className="mt-3 mb-3">
        Hello, admin user <span className="text-danger">{props.username}</span>!
      </div>
      {/* <Link to="/users" className="btn btn-warning m-3">
        User Management
      </Link> */}
      <Table />
      <div>
        <h2>Your Reviews</h2>
        <ReviewList reviews={props.userReviews} />
      </div>
      <div>
        <h2>Recent Reviews</h2>
        <ReviewList reviews={props.recentReviews} />
      </div>

      {/* <div>
        <h2>Manage Users</h2>
        <UserList users={props.users} />
      </div> */}
    </div>
  );
}

export default AdminView;
