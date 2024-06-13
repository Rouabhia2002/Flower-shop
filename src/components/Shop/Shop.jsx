// src/pages/Shop/Shop.jsx
import React from 'react';
import { storeProducts } from '../../data';
import Cart from '../../components/Cart/Cart';
import './Shop.css'; // Import the CSS for the shop layout

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>NEW ARRIVAL</h1>
        <p>Discover the Latest Additions at Your Top Choice Flower Shop</p>
        <p>Share some details here. This is a flexible section where you can share anything you want.</p>
      </div>
      <div className="carts">
      {storeProducts.map(item => (
        <Cart key={item.id} {...item} />
      ))}
      </div>
    </div>
  );
};

export default Shop;
