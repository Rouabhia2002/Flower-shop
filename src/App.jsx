import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import OpencartPage from './pages/OpencartPage.jsx';
import AdminOrders from './components/AdminOrders/AdminOrders.jsx';
import Login from './components/Login/Login.jsx';
import RegisterPage from './components/RegisterPage/RegisterPage.jsx';
import { SelectedItemProvider } from './context/SelectedItemContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <AuthProvider navigate={navigate}>
      <SelectedItemProvider>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
          <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
          <Route path="/opencart" element={<ProtectedRoute><OpencartPage /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><AdminOrders /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        </Routes>
      </SelectedItemProvider>
    </AuthProvider>
  );
}

export default App;
