import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import AboutPage from '../src/pages/AboutPage.jsx';
import ContactPage from '../src/pages/ContactPage.jsx';
import ShopPage from '../src/pages/ShopPage.jsx';
import { SelectedItemProvider } from './context/SelectedItemContext.jsx';
import OpencartPage from '../src/pages/OpencartPage.jsx';

function App() {
  return (
    <SelectedItemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/opencart" element={<OpencartPage />} /> 
        </Routes>
      </Router>
    </SelectedItemProvider>
  );
}

export default App;
