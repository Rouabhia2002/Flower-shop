import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Login.css'; // Create this CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      alert('Login successful');
    } catch (error) {
      alert('Failed to login');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
