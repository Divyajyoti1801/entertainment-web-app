import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../Component/SignIn/SignIn.component";
import SignUp from "../../Component/SignUp/SignUp.component";

const Authentication = () => {
  return (
    <Routes>
      <Route index path="/" element={<SignIn />} />
      <Route index path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Authentication;
