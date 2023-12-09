import axios from "axios";
import db from "../Database";

const API_BASE = process.env.REACT_APP_API_BASE;
const USER_URL = `${API_BASE}/users`;
const REVIEW_URL = `${API_BASE}/reviews`;

// getLatestReviews()
// getReviewsByUserId(userID)
// createNewRestaurant()
// getRestaurantsByUserId(userID)
// getReviewsByRestaurantId(restaurantID)
// getAllUsers()

export const findUser = async (userId) => {
  const response = await axios.get(`${USER_URL}/${userId}`);
  return response.data;
};

// reviews
export const getLatestReviews = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.reviews;
  return response;
};

export const getReviewsByUserId = async (userId) => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.reviews.filter((review) => (review.user_id = userId));
  console.log(userId, response);
  return response;
};

// users
export const findAllUsers = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.users;
  // console.log(userId, response);
  return response;
};

export const createUser = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.users;
  // console.log(userId, response);
  return response;
};

export const findUserById = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.users;
  // console.log(userId, response);
  return response;
};
export const updateUser = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.users;
  // console.log(userId, response);
  return response;
};
export const deleteUser = async () => {
  // const response = await axios.get(`${USER_URL}/${userId}`);
  // return response.data;

  const response = db.users;
  // console.log(userId, response);
  return response;
};
