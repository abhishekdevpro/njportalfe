// ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = () => {
  const { authToken } = useAuth();

  return authToken ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
