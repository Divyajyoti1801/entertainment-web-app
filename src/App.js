import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Routes/Authentication/Authentication.router";
import Bookmark from "./Routes/Bookmark/Bookmark.router";
import Home from "./Routes/Home/Home.router";
import Movies from "./Routes/Movies/Movies.router";
import Navigation from "./Routes/Navigation/Navigation.router";
import Search from "./Routes/Search/Search.router";
import TvSeries from "./Routes/TvSeries/TvSeries.router";
import { setCurrentUser } from "./store/User/user.actions";
import {
  OnAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TvSeries />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="auth/*" element={<Authentication />} />
    </Routes>
  );
};

export default App;
