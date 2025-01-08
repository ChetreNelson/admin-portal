import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const isLoggedIn = localStorage.getItem("mythBoost");

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
