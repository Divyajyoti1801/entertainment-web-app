import { createSelector } from "reselect";

const selectTrendingReducer = (state) => state.trending;

export const selectTrending = createSelector(
  [selectTrendingReducer],
  (trendingData) => trendingData.trending
);

export const selectIsLoading = createSelector(
  [selectTrendingReducer],
  (trendingData) => trendingData.isLoading
);
