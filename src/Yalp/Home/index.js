import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../NavigationBar";
import Container from "react-bootstrap/Container";
import AnonView from "./AnonView";
import UserView from "./UserView";
import OwnerView from "./OwnerView";
import AdminView from "./AdminView";
import * as client from "../client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReviewList from "../Components/ReviewList";

function Home() {
  const user = {
    userId: "1",
    username: "defaultuser",
  };
  const { userId, username } = user;
  const [recentReviews, setRecentReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client
      .getReviewsByUserId(userId)
      .then((reviews) => setUserReviews(reviews));
    client.getLatestReviews().then((reviews) => setRecentReviews(reviews));
    client.findAllUsers().then((users) => setUsers(users));
  }, []);

  console.log("annonview", recentReviews, typeof recentReviews, userReviews);
  return (
    <Container className="mt-3">
      {/* visiter */}
      {/* {recentReviews.map((review, index) => (
        <>
          {" "}
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src="https://picsum.photos/40/30" />
            <Card.Body>
              <Card.Title>{username}</Card.Title>
              <Card.Text>{review.content}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </>
      ))}
      <ReviewList reviews={recentReviews} /> */}
      <AnonView username={username} recentReviews={recentReviews} />
      <hr />
      {/* normal user */}
      <UserView
        username={username}
        recentReviews={recentReviews}
        userReviews={userReviews}
      />
      <hr />
      {/* restaurant owner */}
      {/* <OwnerView /> */}
      <hr />
      {/* restaurant owner */}
      <AdminView
        username={username}
        recentReviews={recentReviews}
        userReviews={userReviews}
        users={users}
      />
      <hr />
    </Container>
  );
}

export default Home;
