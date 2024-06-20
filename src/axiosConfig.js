// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',  // Replace with your actual API URL
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json'  // Adjust headers as needed
  }
});

export default instance;
