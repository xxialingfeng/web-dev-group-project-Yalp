import React from "react";

function OwnerView() {
  const user = {
    username: "defaultuser",
  };
  const { username } = user;
  return (
    <div className="">
      <div>Hello, restaurant owner {username}!</div>
      <div>
        <h2>Create New Restaurant</h2>
        <div>(placeholder)</div>
      </div>
      <div>
        <h2>Your Restaurants</h2>
        <div>(placeholder)</div>
      </div>
      <div>
        <h2>Recent Reviews</h2>

        <div>(placeholder)</div>
      </div>
    </div>
  );
}

export default OwnerView;
