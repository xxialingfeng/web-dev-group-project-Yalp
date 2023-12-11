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
import { useSelector } from "react-redux";

function Home() {
  // const user = {
  //   userId: "1",
  //   username: "defaultuser",
  // };
  const { currentUser } = useSelector((state) => state.userReducer);

  // const { userId, username } = user;
  const [recentReviews, setRecentReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (currentUser !== null) {
      const { _id, username, role } = currentUser;
      console.log(_id);
      client
        .getReviewsByUserId(username)
        .then((reviews) => setUserReviews(reviews));
      if (role === "ADMIN") {
        client.findAllUsers().then((users) => setUsers(users));
      }
    }

    client.getLatestReviews().then((reviews) => setRecentReviews(reviews));
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
      {!currentUser && <AnonView recentReviews={recentReviews} />}
      {currentUser &&
        (currentUser.role === "ADMIN" ? (
          <AdminView
            username={currentUser.username}
            recentReviews={recentReviews}
            userReviews={userReviews}
            users={users}
          />
        ) : (
          <UserView recentReviews={recentReviews} userReviews={userReviews} />
        ))}

      {/* {currentUser && currentUser.role === "USER" && (
        <UserView recentReviews={recentReviews} userReviews={userReviews} />
      )}
      {currentUser && currentUser.role === "ADMIN" && (
        <AdminView
          recentReviews={recentReviews}
          userReviews={userReviews}
          users={users}
        />
      )} */}
    </Container>
  );
}

export default Home;
