import axios from "axios";
//
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const BUSINESSES_API = `${BASE_API}/api/businesses`;

export const findBusinesses = async (term, location) => {
  const response = await axios.get(`${BUSINESSES_API}/${term}/${location}`);
  return response.data;
};

export const findBusinessById = async (businessId) => {
  const response = await axios.get(`${BUSINESSES_API}/${businessId}`);
  return response.data;
};

// export const findReviewById = async (businessId) => {
//   const response = await axios.get(`${BUSINESSES_API}/${businessId}/reviews`);
//   return response.data;
// };

// export const findBusinesses = async (term, location) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       // "Cache-Control": "max-age=600 public must-revalidate",
//     },
//   };
//   const response = await axios.get(
//     // `${HEROKU_APP}${YELP_API}/businesses/search?term=${term}&location=${location}`,
//     `${YELP_API}/businesses/search?term=${term}&location=${location}`,
//     config
//   );
//   return response.data;
// };

// export const findBusinessById = async (businessId) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };
//   const response = await axios.get(
//     `${HEROKU_APP}${YELP_API}/businesses/${businessId}`,
//     config
//   );
//   return response.data;
// };

// export const findReviewById = async (businessId) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };
//   const response = await axios.get(
//     `${HEROKU_APP}${YELP_API}/businesses/${businessId}/reviews`,
//     config
//   );
//   return response.data.reviews;
// };
