import { createSelector } from "reselect";

const selectSearchReducer = (state) => state.search;

export const selectSearchInput = createSelector(
  [selectSearchReducer],
  (searchData) => searchData.searchInput
);

export const selectSearchData = createSelector(
  [selectSearchReducer],
  (searchData) => searchData.search
);

export const selectIsLoading = createSelector(
  [selectSearchReducer],
  (searchData) => searchData.isSearchLoading
);
