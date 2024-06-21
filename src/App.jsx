import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import AboutPage from '../src/pages/AboutPage.jsx';
import ContactPage from '../src/pages/ContactPage.jsx';
import ShopPage from '../src/pages/ShopPage.jsx';
import OpencartPage from '../src/pages/OpencartPage.jsx';
import AdminOrders from './components/AdminOrders/AdminOrders.jsx';
import Login from './components/Login/Login.jsx'; // Ensure this is the correct path
import RegisterPage from './components/RegisterPage/RegisterPage.jsx';
import { SelectedItemProvider } from './context/SelectedItemContext.jsx';
import { AuthProvider, AuthContext } from './context/AuthContext.jsx';
import { useContext } from 'react';
import Checkout from './components/Checkout/Checkout.jsx';
import CheckoutPage from '../src/pages/CheckoutPage.jsx'; // Ensure this is the correct path


const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authToken } = useContext(AuthContext);
  return authToken ? <Component {...rest} /> : <Login />;
};

function App() {
  return (
    <AuthProvider>
      <SelectedItemProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/opencart" element={<OpencartPage />} /> 
            <Route path="/checkout" element={<Checkout/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<ProtectedRoute element={AdminOrders} />} />
            <Route path="/checkout" element={<CheckoutPage/>} /> 
            <Route path="/register" element={<RegisterPage/>} /> 
            
            </Routes>
        </Router>
      </SelectedItemProvider>
    </AuthProvider>
  );
}

export default App;
