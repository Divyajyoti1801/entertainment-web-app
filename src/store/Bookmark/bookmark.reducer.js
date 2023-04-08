import BOOKMARK_ACTION_TYPES from "./bookmark.type";

const INITIAL_STATE = {
  bookmarks: [],
};

export const bookmarkReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKMARK_ACTION_TYPES.ADD_BOOKMARK:
      return { ...state, bookmarks: payload };
    case BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK:
      return { ...state, bookmarks: payload };
    default:
      return state;
  }
};
