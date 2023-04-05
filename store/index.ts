import { configureStore } from "@reduxjs/toolkit";
import chartDataSlice from "./chartDataSlice";

const store = configureStore({
  reducer: {
    chartData: chartDataSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
