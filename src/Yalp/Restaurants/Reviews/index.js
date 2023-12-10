import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import ProgressBar from "react-bootstrap/ProgressBar";
import * as client from "../client";
import { json, useParams } from "react-router";

function Reviews(props) {
  const { restaurantId } = useParams();
  const [ratings, setRatings] = useState({});
  useEffect(() => {
    client
      .findRatingsForRestaurant(restaurantId)
      .then((ratings) => setRatings(ratings));
  }, []);
  console.log("ratings:" + JSON.stringify(ratings));
  console.log("ratings:" + ratings.star_1);
  const sumCount =
    ratings.star_1 +
    ratings.star_2 +
    ratings.star_3 +
    ratings.star_4 +
    ratings.star_5;
  console.log(sumCount);
  return (
    <div className="m-4">
      <div id="recommended review" className="">
        <h2 className="">Recommended Reviews </h2>

        <div className="reviewOverall form-control  d-flex justify-content-between mb-3 ">
          <div className="me-5 col-2">
            <h5 className="">Overall rating</h5>
            <div className="">🌟🌟🌟🌟🌟</div>
            <div className="text-secondary">916 reviews</div>
          </div>
          <div className="col">
            <div className="row d-flex">
              <div className="col-1">5 star</div>
              <div className="col">
                <ProgressBar
                  className=""
                  now={(ratings.star_5 / sumCount) * 100}
                  label={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">4 star</div>
              <div className="col">
                <ProgressBar
                  className=""
                  now={(ratings.star_4 / sumCount) * 100}
                  label={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">3 star</div>
              <div className="col">
                <ProgressBar
                  className=""
                  now={(ratings.star_3 / sumCount) * 100}
                  label={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">2 star</div>
              <div className="col">
                <ProgressBar
                  className=""
                  now={(ratings.star_2 / sumCount) * 100}
                  label={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-1">1 star</div>
              <div className="col">
                <ProgressBar
                  className=""
                  now={(ratings.star_1 / sumCount) * 100}
                  label={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
}

export default Reviews;
