import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "home"
const INITIAL_HOME_STATE = {
  stuff: [],
  cartCount: 0
};

export const homeSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_HOME_STATE,
  reducers: {
    increment: state => {
      state.cartCount += 1;
    },
    decrement: state => {
      state.cartCount -= 1;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});

export const { increment, decrement, setCartCount } = homeSlice.actions;

export default homeSlice.reducer;
