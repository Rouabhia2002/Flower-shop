import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decodeToken = async () => {
      if (authToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        setUser(jwtDecode(authToken));
      }
    };
    decodeToken();
  }, [authToken]);

  
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      setAuthToken(response.data.token);
      localStorage.setItem('authToken', response.data.token);
      setUser(jwtDecode(response.data.token));
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed: Invalid credentials');
    }
  };
  





  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, password });
      setAuthToken(response.data.token);
      localStorage.setItem('authToken', response.data.token);
      setUser(jwtDecode(response.data.token)); // Corrected decoding
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed: Invalid token');
    }
  };

  
  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout , register}}>
      {children}
    </AuthContext.Provider>
  );
};
