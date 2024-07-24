// EmployeeAuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const EmployeeAuthContext = createContext();

export const EmployeeAuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("employeeLoginToken")
  );

  const login = (token) => {
    localStorage.setItem("employeeLoginToken", token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem("employeeLoginToken");
    setAuthToken(null);
  };

  return (
    <EmployeeAuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </EmployeeAuthContext.Provider>
  );
};

export const useEmployeeAuth = () => useContext(EmployeeAuthContext);
