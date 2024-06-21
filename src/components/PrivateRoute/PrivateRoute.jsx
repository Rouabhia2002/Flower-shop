import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
