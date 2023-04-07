import { createSelector } from "reselect";

const selectBookmarkReducer = (state) => state.bookmark;

export const selectBookmarkItem = createSelector(
  [selectBookmarkReducer],
  (bookmarkData) => bookmarkData.bookmarkItems
);
