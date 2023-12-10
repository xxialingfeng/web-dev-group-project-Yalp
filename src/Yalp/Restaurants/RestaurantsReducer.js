import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  restaurant: {},
  dishes: [],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

export const { setRestaurants, setRestaurant, setDishes } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
