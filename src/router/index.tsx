import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as path from "./path";

import PrivateRoute from "./routes/PrivateRoute";
import PrivateLayout from "assets/components/layout";
import Login from "views/authentication/Login/Login";

const Dashboard = lazy(() => import("views/dashboard"));
const Ranks = lazy(() => import("views/RankSetup"));
const Settings = lazy(() => import("views/Settings/Settings"));

const Router = () => {
  return (
    <Routes>
      <Route path={path.LOGIN} element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={path.PARENT_ROUTE} element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={path.RANK_SETUP} element={<Ranks />} />
          <Route path={path.SETTINGS} element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
