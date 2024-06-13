import React from 'react';
import './Why.css';

const Why = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <input type="checkbox" id="faq1" />
        <label htmlFor="faq1">How can I place an order?</label>
        <div className="faq-answer">
          <p>To place an order, simply browse our products, add items to your cart, and proceed to checkout.</p>
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq2" />
        <label htmlFor="faq2">What payment methods do you accept?</label>
        <div className="faq-answer">
          <p>We accept various payment methods including credit/debit cards, PayPal, and bank transfers.</p>
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq3" />
        <label htmlFor="faq3">How long does shipping take?</label>
        <div className="faq-answer">
          <p>Shipping times vary depending on your location. Typically, orders are delivered within 3-7 business days.</p>
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq4" />
        <label htmlFor="faq4">Do you offer international shipping?</label>
        <div className="faq-answer">
          <p>Yes, we offer international shipping to select countries. Please refer to our shipping policy for more information.</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
