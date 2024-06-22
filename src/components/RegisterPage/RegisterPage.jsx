import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Assuming you have created this CSS file for styling

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      navigate('/login'); // Redirect to admin page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed: ' + error.message); // Display appropriate error message
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
