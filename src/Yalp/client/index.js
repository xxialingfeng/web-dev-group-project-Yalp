import axios from "axios";
import db from "../Database";

const API_BASE = process.env.REACT_APP_API_BASE;
const HOME_URL = `${API_BASE}/home`;
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
  const response = await axios.get(`${REVIEW_URL}`);
  // return response.data;

  // const response = db.reviews;
  return response.data;
};

export const getReviewsByUserId = async (userId) => {
  const response = await axios.get(`${REVIEW_URL}/${userId}`);
  // return response.data;

  // const response = db.reviews.filter((review) => (review.user_id = userId));
  console.log("getReviewsByUserId", userId, response.data);
  return response.data;
};

// users
export const findAllUsers = async () => {
  const response = await axios.get(`${USER_URL}`);
  return response.data;

  // const response = db.users;
  // console.log(userId, response);
  // return response;
};

export const createUser = async (user) => {
  const response = await axios.post(`${USER_URL}`, user);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await axios.get(`${USER_URL}/${id}`);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await axios.put(`${USER_URL}/${user._id}`, user);
  return response.data;
};
export const deleteUser = async (user) => {
  const response = await axios.delete(`${USER_URL}/${user._id}`);
  return response.data;
};
