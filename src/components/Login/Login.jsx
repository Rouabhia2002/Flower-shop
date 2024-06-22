import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Login.css'; // Import the CSS file for styling
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/'); 
      //alert('Login successful');
    } catch (error) {
      alert('Failed to login');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login Page</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="login-input"
        />
        <div className="password-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input password-input"
          />
          {/* Visibility icon can be added here */}
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-link-container">
        <p>Don't have an account? <Link to="/register" className="login-link">Register now</Link></p>
      </div>
    </div>
  );
};

export default Login;
