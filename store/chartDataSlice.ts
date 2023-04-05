/* eslint-disable no-param-reassign */
import { IResponseData } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "110",
  county: "",
  district: "",
  items: [],
  isFetching: false,
  errorMessage: "",
} as {
  year: string;
  county: string;
  district: string;
  items: IResponseData[];
  isFetching: boolean;
  errorMessage: string;
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
    cleanCounty(state) {
      state.county = "";
      state.district = "";
    },
    cleanDistrict(state) {
      state.district = "";
    },
    updateItems(state, action) {
      state.items = action.payload.items;
    },
    startFetching(state) {
      state.isFetching = true;
    },
    endFetching(state) {
      state.isFetching = false;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const chartDataActions = chartDataSlice.actions;

export default chartDataSlice;
