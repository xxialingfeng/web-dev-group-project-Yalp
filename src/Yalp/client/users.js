import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const USER_URL = `${API_BASE}/users`;

export const findUser = async (userId) => {
  const response = await axios.get(`${USER_URL}/${userId}`);
  return response.data;
};
