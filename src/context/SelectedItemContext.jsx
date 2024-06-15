import React, { createContext, useState, useEffect } from 'react';
import { storeProducts } from '../data.js';

export const SelectedItemContext = createContext();

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [CartItem, setCartItems] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(CartItem));
  }, [CartItem]);

  const addToCart = (id) => {
    const itemToAdd = storeProducts.find(item => item.id === id);
    if (itemToAdd) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...itemToAdd, quantity: 1 }];
        }
      });
    }
  };

  const minusToCart = (id) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };


 

  const calculateTotalPrice = () => {
    return CartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem, addToCart, minusToCart, CartItem, calculateTotalPrice, handleRemoveItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
