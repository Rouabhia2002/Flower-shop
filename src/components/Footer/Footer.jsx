import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-section large">
          <h2>Flower Shop</h2>
          <p>Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.</p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Address: 13 Fifth Avenue, New York 101660</p>
          <p>Email: <a href="mailto:contact@info.com">contact@info.com</a></p>
          <p>Phone: <a href="tel:+91987654321">+91 987 654 321</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ROUABHIA Amira</p>
        <div className="social-media">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><AiFillYoutube /></a>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
