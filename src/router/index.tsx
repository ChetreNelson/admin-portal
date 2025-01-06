import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as path from "./path";

import PrivateRoute from "./routes/PrivateRoute";
//public pages
import Login from "views/authentication/Login/Login";
import Register from "views/authentication/Register/Register";

const Router = () => {
  return (
    <Routes>
      <Route path={path.PARENT_ROUTE} element={<Login />} />
      <Route path={path.REGISTER} element={<Register />} />
      {/* <Route path={path.PARENT_ROUTE} element={<MLRating />} /> */}
      <Route element={<PrivateRoute />}>
        {/* <Route path={path.USER_DETAILS} element={<UserDetails />} />
        <Route path={path.CHECKOUT} element={<Payment />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
