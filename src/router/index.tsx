import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as path from "./path";

import PrivateRoute from "./routes/PrivateRoute";
//public pages
import Login from "views/authentication/Login/Login";
//private pages
import Dashboard from "views/dashboard";
import PrivateLayout from "assets/components/layout";
import RankSetupForm from "views/RankSetup/RankSetupForm";

const Router = () => {
  return (
    <Routes>
      <Route path={path.LOGIN} element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path={path.PARENT_ROUTE} element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={path.RANK_SETUP} element={<RankSetupForm />} />
          <Route path={path.SETTINGS} element={<RankSetupForm />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
