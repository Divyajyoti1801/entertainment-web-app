import { createSelector } from "reselect";

const selectBookmarkReducer = (state) => state.bookmarks;

export const selectBookmarks = createSelector(
  [selectBookmarkReducer],
  (bookmarkData) => bookmarkData.bookmarks
);