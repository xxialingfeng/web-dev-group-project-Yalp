import React from "react";
import LOGO from "./Chef-restaurant-logo.jpg";
import dishImg from "./dish.avif";
import mapImg from "./mapImg.png";
import userImg from "./user.png";

import { Link } from "react-router-dom";

export const Restaurant = () => {
  const dishes = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="text-light"> (restaurant page)</div>
      <div className="d-flex m-4">
        <img id="restaurantLogo" alt="" src={LOGO} width={100} height={100} />
        <div className="ms-2">
          <div className="text-light">Restaurant Name</div>
          <div className="">🌟🌟🌟🌟🌟</div>
          <div className="text-light">Yalp for a business?</div>
        </div>
      </div>

      <div className="m-4">
        <Link className="btn btn-danger me-2" to={"#"}>
          Write Review
        </Link>
        <Link className="btn btn-secondary me-2" to={"#"}>
          Add Photo
        </Link>
      </div>
      <div>
        <p>1</p>
        <p>2</p>
      </div>

      <div id="menu" className="m-4">
        <h2 className="">Menu</h2>
        <div className="d-flex justify-content-between">
          <h3>Popular dishes</h3>
          <Link className="btn font-weight-bold">View full menu > </Link>
        </div>
        <div className="d-flex">
          {dishes.map((dish) => (
            <div className="card me-3">
              <img
                src={dishImg}
                class="card-img-top"
                height={100}
                width={60}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">$35.0</h5>
                {/* <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="locationHours" className="m-4">
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

      <div id="recommended review" className="m-4">
        <h2 className="">Recommended Reviews </h2>

        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex">
            <button className="btn btn-secondary me-2">Yelp Sort</button>
            <button className="btn btn-secondary me-2">English (900)</button>
            <button className="btn btn-secondary me-2">5 stars</button>
          </div>

          <div className="d-flex ">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search reviews"
            />
            <button className="btn btn-secondary me-2">Search</button>
          </div>
        </div>

        <div className="form-control">
          <div className="d-flex ">
            <div className="d-flex">
              <img src={userImg} alt="" width={50} height={50} />
              <div className="">
                <div className="">Username</div>
                <div className="">Location</div>
              </div>
            </div>
            <div className="form-control d-flex">
              <div className="">🌟🌟🌟🌟🌟</div>
              <div className="">Select your rating</div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="me-3">
              <div className="">Overall rating</div>
              <div className="">🌟🌟🌟🌟🌟</div>
              <div className="">916 reviews</div>
            </div>
            <div className="">
              <div className="row">
                <div className="col">5 star</div>
                <div className="col">bar ......</div>
              </div>
              <div className="row">
                <div className="col">4 star</div>
                <div className="col">bar ......</div>
              </div>
              <div className="row">
                <div className="col">3 star</div>
                <div className="col">bar ......</div>
              </div>
              <div className="row">
                <div className="col">2 star</div>
                <div className="col">bar ......</div>
              </div>
              <div className="row">
                <div className="col">1 star</div>
                <div className="col">bar ......</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
