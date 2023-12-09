import axios from "axios";
import { Restaurant } from ".";
import db from "../Database";

export const findRestaurantById = async (restaurantId) => {
  const res = db.restaurants.find((r) => r._id === restaurantId.toString());
  return res;
};

export const findDishesForRestaurant = async (restaurantId) => {
  const res = db.dishes.filter(
    (d) => d.restaurant_id === restaurantId.toString()
  );
  return res;
};

export const findHoursForRestaurant = async (restaurantId) => {
  const res = db.hours.filter(
    (h) => h.restaurant_id === restaurantId.toString()
  );
  return res;
};

export const findRatingsForRestaurant = async (restaurantId) => {
  const res = db.ratings.find(
    (r) => r.restaurant_id === restaurantId.toString()
  );
  return res;
};

export const findReviewsForRestaurant = async (restaurantId) => {
  console.log("findReviewsForRestaurant:" + restaurantId);
  const res = db.reviews.filter(
    (r) => r.restaurant_id === restaurantId.toString()
  );
  return res;
};
