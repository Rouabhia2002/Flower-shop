import React, { useContext } from 'react';
import { SelectedItemContext } from '../../context/SelectedItemContext'; // Adjust path as necessary
import './Opencart.css'; // Ensure this file exists
import { Button } from 'react-bootstrap';

const OpenCart = () => {
  const { selectedItem , CartItem} = useContext(SelectedItemContext);


  const { addToCart } = useContext(SelectedItemContext);
  const { minusToCart } = useContext(SelectedItemContext);

  const handleAddToCart = () => {
    addToCart(selectedItem.id);
  };

  const pluSoneToCart = () => {
    addOneToCart(selectedItem.id);
  };

  const minusSoneToCart = () => {
    minusToCart(selectedItem.id);
  };
  
  if (!selectedItem) return null;

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
      <div className=' d-flex flex-column'>
      <Button variant="primary"   onClick={handleAddToCart} >ADD TO CART</Button>
      <div className='flex-row'>
         <Button variant="primary"  onClick={handleAddToCart} >+</Button>
         <Button variant="primary"  onClick={minusSoneToCart} >-</Button>
      </div>

     
      </div>
    

    </div>
  );
};

export default OpenCart;
