import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useEmployeeAuth } from "./EmployeeAuthContext"; // Ensure this path is correct

const EmployeeProtectedRoute = () => {
  const { authToken } = useEmployeeAuth();

  return authToken ? <Outlet /> : <Navigate to="/employee/login" />;
};

export default EmployeeProtectedRoute;
