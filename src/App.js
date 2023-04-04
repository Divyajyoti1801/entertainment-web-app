import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Routes/Authentication/Authentication.router";
import Home from "./Routes/Home/Home.router";
import Navigation from "./Routes/Navigation/Navigation.router";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth/*" element={<Authentication />} />
    </Routes>
  );
};

export default App;
