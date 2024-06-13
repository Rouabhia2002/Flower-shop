import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiStarSLine } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { SelectedItemContext } from '../../context/SelectedItemContext.jsx';
import './Cart.css'; // Make sure you create this file for styling

const Cart = ({ id, title, price, img }) => {
  const { setSelectedItem } = useContext(SelectedItemContext);
  const navigateTo = useNavigate(); // Initialize useHistory

  const handleItemClick = () => {
    setSelectedItem({ id,title, price, img });
    navigateTo('/opencart'); // Navigate to OpencartPage
  };

  return (
    <div className='card' onClick={handleItemClick}>
      <div className='photo'>
        <div className='sale-badge'>Sale!</div>
        <div className="hov"><FaShoppingCart/></div>
        <img src={img} alt={title} className='product-img' />
      </div>
      <h3>{title}</h3>
      <div className="stars">
        {[...Array(5)].map((_, starIndex) => (
          <RiStarSLine key={starIndex} />
        ))}
      </div>
      <h3>${price}</h3>
    </div>
  );
};

export default Cart;
