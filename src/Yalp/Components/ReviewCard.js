import React from "react";
import * as usersClient from "../client/users";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ReviewCard(review) {
  const { userID, reviewContent } = review;
  const { userImg, userName } = usersClient.findUser(userID);
  return (
    <div>
      reviewCard
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>{reviewContent}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default ReviewCard;
