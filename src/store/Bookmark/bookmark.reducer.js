import BOOKMARK_ACTION_TYPES from "./bookmark.type";

const INITIAL_STATE = {
  bookmarkItems: [],
};

export const bookmarkReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_ITEMS:
      return { ...state, bookmarkItems: [...state.bookmarkItems, payload] };
    case BOOKMARK_ACTION_TYPES.REMOVE_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.filter(
          (item) => item.id !== payload.id
        ),
      };
    case BOOKMARK_ACTION_TYPES.TOGGLE_BOOKMARKED:
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.map((item) => {
          if (item.id === payload) {
            return { ...item, bookmarked: !item.bookmarked };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
