// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("jobSeekerLoginToken")
  );

  const login = (token) => {
    localStorage.setItem("jobSeekerLoginToken", token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem("jobSeekerLoginToken");
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
