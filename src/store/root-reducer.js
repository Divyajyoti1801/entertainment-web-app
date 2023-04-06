import { combineReducers } from "redux";
import { trendingReducer } from "./Trending/trending.reducer";
import { userReducer } from "./User/user.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  trending: trendingReducer,
});
