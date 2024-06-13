import React, { createContext, useState } from 'react';
import { storeProducts } from '../data.js';
export const SelectedItemContext = createContext();

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [CartItem, setCartItems] = useState([]);



  
  const addToCart = (id) => {
    const itemToAdd = storeProducts.find(item => item.id === id);
    if (itemToAdd) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === id);
        if (existingItem) {
          // If item already in cart, increase its quantity
          return prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // If item not in cart, add it with quantity 1
          return [...prevItems, { ...itemToAdd, quantity: 1 }];
        
        }
      });
    }
  };

  

  
  const minusToCart = (id) => {
    const itemToAdd = storeProducts.find(item => item.id === id);
    if (itemToAdd) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === id);
        if (existingItem.quantity > 1) {
          // Decrease the quantity if it's more than 1
          return prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // Remove the item if its quantity is 1
          return prevItems.filter(item => item.id !== id);
        }
        });
    }
  };



  const calculateTotalPrice = () => {
    return CartItem.reduce((total, item) => total + (item.price* item.quantity), 0);
  };




  
  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  






  console.log(CartItem);
  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem, addToCart, minusToCart, CartItem , calculateTotalPrice ,handleRemoveItem}}>
      {children}
    </SelectedItemContext.Provider>
  );
};
