import { createSelector } from "reselect";

const selectTvReducer = (state) => state.series;

export const selectTvSeries = createSelector(
  [selectTvReducer],
  (seriesData) => seriesData.series
);

export const selectIsSeriesLoading = createSelector(
  [selectTvReducer],
  (seriesData) => seriesData.isSeriesLoading
);
