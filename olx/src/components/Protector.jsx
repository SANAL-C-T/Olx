// src/components/ProtectedRoute.js

import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../context/authContext'; // Adjust the path based on your AuthContext file

const ProtectedRoute = ({ element, ...rest }) => {
  const { userLogged } = useContext(AuthContext); // Access userLogged from your context

  return (
    <Route
      {...rest}
      element={userLogged ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
