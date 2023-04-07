import { createAction } from "../../utils/reducer/reducer.utils";
import BOOKMARK_ACTION_TYPES from "./bookmark.type";

export const addItemToBookmark = (item) =>
  createAction(BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_ITEMS, item);

export const removeItemFromBookmark = (item) =>
  createAction(BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK_ITEMS, item);

export const toggleBookmark = (movieId) =>
  createAction(BOOKMARK_ACTION_TYPES.TOGGLE_BOOKMARKED, movieId);
