import React, { useContext } from 'react';
import { SelectedItemContext } from '../../context/SelectedItemContext';
import { Button } from 'react-bootstrap';
import './Opencart.css';

const OpenCart = () => {
  const { selectedItem, addToCart, minusToCart, CartItem } = useContext(SelectedItemContext);

  const handleAddToCart = () => {
    addToCart(selectedItem.id);
  };

  const pluSoneToCart = () => {
    addToCart(selectedItem.id); // Assuming addToCart already handles incrementing quantity
  };

  const minusSoneToCart = () => {
    minusToCart(selectedItem.id);
  };

  if (!selectedItem) return null;

  // Find the quantity of the selected item in CartItem array
  const selectedCartItem = CartItem.find(item => item.id === selectedItem.id);
  const quantityInCart = selectedCartItem ? selectedCartItem.quantity : 0;

  return (
    <div className='opencart'>
      <div className="image-container">
        <img src={selectedItem.img} alt={selectedItem.title} className='product-img' />
      </div>
      <div className="details-container">
        <h2>{selectedItem.title}</h2>
        <ul className="shipping-details">
          <li>Categories: Bouquet, Flower</li>
          <li>Free shipping on orders over $50!</li>
          <li>No-Risk Money Back Guarantee!</li>
          <li>No Hassle Refunds</li>
          <li>Secure Payments</li>
        </ul>
        <h3>${selectedItem.price}</h3>
      </div>
      <div className='d-flex flex-column'>
        <Button variant="primary" onClick={handleAddToCart}>ADD TO CART</Button>
        <div className='flex-row'>
          <Button variant="primary" onClick={pluSoneToCart}>+</Button>
          <span>{quantityInCart}</span>
          <Button variant="primary" onClick={minusSoneToCart}>-</Button>
        </div>
      </div>
    </div>
  );
};

export default OpenCart;
