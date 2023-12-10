import axios from "axios";

const API_BASE = "http://localhost:4000/api";

const REVIEW_API = `${API_BASE}/review`;
const USER_API = `${API_BASE}/user`;

export const findAllReviewsByRestaurantId = async (restaurantId) => {
  const response = await axios.get(`${REVIEW_API}/${restaurantId}`);
  return response.data;
};

export const createReview = async (userId, restaurantId, reviewContent) => {
  const response = await axios.post(
    `${REVIEW_API}/${restaurantId}/${userId}/${reviewContent}`
  );
  return response.data;
};
export const deleteReview = async (userId, restaurantId) => {
  const response = await axios.delete(
    `${REVIEW_API}/${restaurantId}/${userId}`
  );
  return response.data;
};
export const updateReview = async (userId, restaurantId, reviewContent) => {
  const response = await axios.put(
    `${REVIEW_API}/${restaurantId}/${userId}/${reviewContent}`
  );
  return response.data;
};

export const findReviewByUserId = async (userId, restaurantId) => {
  const response = await axios.get(`${USER_API}/${userId}/${restaurantId}`);
  return response.data;
};
