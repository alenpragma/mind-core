import { createSlice } from "@reduxjs/toolkit";

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState:{
    sideNavButton: true
  } ,
  reducers: {
    activeSideNav: (state, action) => {
      state.sideNavButton = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { activeSideNav } = sideNavSlice.actions;

export default sideNavSlice.reducer;