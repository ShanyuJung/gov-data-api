/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "110",
  county: "",
  district: "",
  items: [],
};

const chartDataSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    selectYear(state, action) {
      state.year = action.payload.year;
    },
    selectCounty(state, action) {
      state.county = action.payload.county;
    },
    selectDistrict(state, action) {
      state.district = action.payload.district;
    },
  },
});

export const chartDataActions = chartDataSlice.actions;

export default chartDataSlice;
