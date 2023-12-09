import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setRestaurants, setRestaurant, setDishes } from "./RestaurantsReducer";

import LOGO from "./Chef-restaurant-logo.jpg";
import dishImg from "./dish.avif";
import mapImg from "./mapImg.png";
import Reviews from "./Reviews";
import * as client from "./client";
import { Link } from "react-router-dom";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  // const restaurant = useSelector(
  //   (state) => state.restaurantsReducer.restaurant
  // );
  // const restaurants = useSelector(
  //   (state) => state.restaurantsReducer.restaurants
  // );
  const [restaurant, setRestaurant] = useState({});
  const [dishes, setDishes] = useState([]);
  // const [hours, setHours] = useState([]);
  const [ratings, setRatings] = useState({});

  // const dispatch = useDispatch();

  useEffect(() => {
    // client
    //   .findRestaurantById(restaurantId)
    //   .then((restaurant) => dispatch(setRestaurant(restaurant)));
    client
      .findRestaurantById(restaurantId)
      .then((restaurant) => setRestaurant(restaurant));

    client
      .findDishesForRestaurant(restaurantId)
      .then((dishes) => setDishes(dishes));

    // client
    //   .findHoursForRestaurant(restaurantId)
    //   .then((hours) => setHours(hours));

    // client
    //   .findRatingsForRestaurant(restaurantId)
    //   .then((ratings) => setRatings(ratings));

    // client
    //   .findReviewsForRestaurant(restaurantId)
    //   .then((reviews) => setReviews(reviews));

    console.log("setRes:" + JSON.stringify(restaurant));
  }, []);

  // const dishes = [1, 2, 3, 4, 5, 6];
  return (
    <div className="m-4">
      {/* <div className="text-light"> (restaurant page)</div> */}
      <div className="d-flex m-4">
        <img id="restaurantLogo" alt="" src={LOGO} width={100} height={100} />
        <div className="ms-2">
          <div className="text-light">{restaurant.name}</div>
          {/* <div className="">Rating: {restaurant.rating}</div> */}
          <div className="text-light">Yalp for a business?</div>
        </div>
      </div>

      <div className="m-4 mb-5">
        <Link className="btn btn-danger me-2" to={"#"}>
          Write Review
        </Link>
        <Link className="btn btn-secondary me-2" to={"#"}>
          Add Photo
        </Link>
      </div>

      <div id="menu" className="m-4">
        <h2 className="">Menu</h2>
        <div className="d-flex justify-content-between">
          <h3>Popular dishes</h3>
          <Link className="btn font-weight-bold">View full menu > </Link>
        </div>
        <div className="d-flex">
          {dishes.map((dish, index) => (
            <div key={index} className="card me-3">
              <img
                src={dishImg}
                className="card-img-top"
                height={100}
                width={60}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">${dish.price}</h5>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="location and hours" className="m-4">
        <h2 className="">Location & Hours </h2>
        <div className="d-flex ">
          <div className="d-flex flex-column me-3">
            <img src={mapImg} height={300} width={400} alt="..." />
            <button className="btn btn-primary">Get Direction</button>
          </div>
          <div className="col">
            <div className="row ">
              <div className="col-2">Mon</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Tue</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Wed</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Thu</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Fri</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Sat</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
            <div className="row">
              <div className="col-2">Sun</div>
              <div className="col">11:00 AM - 11:00 PM</div>
            </div>
          </div>
        </div>
      </div>
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
