import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext.jsx';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect or perform actions after logout
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
