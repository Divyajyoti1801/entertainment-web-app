import { combineReducers } from "redux";
import { bookmarkReducer } from "./Bookmark/bookmark.reducer";
import { moviesReducer } from "./Movies/movies.reducer";
import { trendingReducer } from "./Trending/trending.reducer";
import { tvReducer } from "./Tv/tv.reducer";
import { userReducer } from "./User/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  trending: trendingReducer,
  movies: moviesReducer,
  series: tvReducer,
  bookmarks: bookmarkReducer,
});
