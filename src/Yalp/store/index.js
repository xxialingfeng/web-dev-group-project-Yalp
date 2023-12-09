import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../Restaurants/RestaurantsReducer";

const store = configureStore({
  reducer: {
    restaurantsReducer,
  },
});

export default store;
