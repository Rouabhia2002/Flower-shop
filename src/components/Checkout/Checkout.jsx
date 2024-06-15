import React, { useContext, useState } from 'react';
import { SelectedItemContext } from '../../context/SelectedItemContext.jsx';
import './Checkout.css';

const Checkout = () => {
  const { CartItem, calculateTotalPrice } = useContext(SelectedItemContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle order processing here
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>
      <form onSubmit={handleCheckout} className="checkout-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="checkout-input"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
          className="checkout-input"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          required
          className="checkout-input"
        />
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
      <h3 className="checkout-subheading">Order Summary</h3>
      {CartItem.map(item => (
        <div key={item.id} className="checkout-order-item">
          <p>{item.title}</p> 
          <p>{item.name} x {item.quantity}</p>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <h3 className="checkout-total">Total: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default Checkout;
