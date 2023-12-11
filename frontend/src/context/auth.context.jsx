import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:5005';

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('token', token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((response) => {
          const user = response.data;

          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem('token');
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
    return <Navigate to="/login" />;
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>{props.children}</AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
