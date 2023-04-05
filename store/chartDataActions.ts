import { IResponseData } from "@/types/types";
import api from "@/utils/api";
import { chartDataActions } from "./chartDataSlice";

/* eslint-disable import/prefer-default-export */
export const fetchDataHandler = (
  year: string,
  county: string,
  district: string
) => {
  return async (
    dispatch: (arg0: {
      payload: undefined | { items: IResponseData } | { errorMessage: string };
      type:
        | "chartData/startFetching"
        | "chartData/updateItems"
        | "chartData/endFetching"
        | "chartData/setErrorMessage";
    }) => void
  ) => {
    try {
      dispatch(chartDataActions.setErrorMessage({ errorMessage: "" }));
      dispatch(chartDataActions.startFetching());
      const response = await api.getData(year, county, district);
      if (response.responseCode === "OD-0101-S") {
        const newItems = response.responseData as IResponseData[];
        dispatch(chartDataActions.updateItems({ items: newItems }));
      }

      if (response.responseCode === "OD-0102-S") {
        dispatch(
          chartDataActions.setErrorMessage({ errorMessage: "查無資料" })
        );
      }
      dispatch(chartDataActions.endFetching());
    } catch {
      dispatch(
        chartDataActions.setErrorMessage({
          errorMessage: "Something Went Wrong",
        })
      );
      dispatch(chartDataActions.endFetching());
    }
  };
};
