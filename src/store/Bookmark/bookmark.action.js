import { createAction } from "../../utils/reducer/reducer.utils";
import BOOKMARK_ACTION_TYPES from "./bookmark.type";

const addBookmark = (bookmarks, itemToAdd) => {
  const exists = bookmarks.find((item) => item.id === itemToAdd.id);
  if (exists) {
    return bookmarks;
  }
  return [...bookmarks, itemToAdd];
};

const removeBookmark = (bookmarks, itemToRemove) => {
  const exists = bookmarks.find((item) => item.id === itemToRemove.id);
  if (exists) {
    return bookmarks.filter((item) => item.id !== itemToRemove.id);
  }
  return bookmarks;
};

export const AddBookmark = (bookmarks, itemToAdd) => {
  const update = addBookmark(bookmarks, itemToAdd);
  return createAction(BOOKMARK_ACTION_TYPES.ADD_BOOKMARK, update);
};

export const RemoveBookmark = (bookmarks, itemToRemove) => {
  const update = removeBookmark(bookmarks, itemToRemove);
  return createAction(BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK, update);
};
