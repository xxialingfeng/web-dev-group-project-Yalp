import axios from "axios";
export const HEROKU_APP = "https://cors-anywhere.herokuapp.com/";
export const YELP_API = "https://api.yelp.com/v3";
export const API_KEY = process.env.REACT_APP_YELP_API_KEY;

export const findBusinesses = async (term, location) => {
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Cache-Control": "max-age=359200",
    },
  };
  const response = await axios.get(
    `${HEROKU_APP}${YELP_API}/businesses/search?term=${term}&location=${location}`,
    config
  );
  return response.data;
};

export const findBusinessById = async (businessId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const response = await axios.get(
    `${HEROKU_APP}${YELP_API}/businesses/${businessId}`,
    config
  );
  return response.data;
};

export const findReviewById = async (businessId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const response = await axios.get(
    `${HEROKU_APP}${YELP_API}/businesses/${businessId}/reviews`,
    config
  );
  return response.data.reviews;
};
