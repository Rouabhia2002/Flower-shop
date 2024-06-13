import React from 'react';
import { RiStarSLine } from "react-icons/ri";
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="text">
        <h3>TESTIMONIAL</h3>
        <h1>Hear From Our Happy Customers</h1>
        <h2>Share some details here. This is a flexible section where you can share anything you want.</h2>
      </div>

      <div className="boxx">
        {[...Array(3)].map((_, index) => (
          <div className="box" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, starIndex) => (
                <RiStarSLine key={starIndex} />
              ))}
            </div>
            <p>
              I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
            </p>

            <div className="smallbox">
              <div className="img"></div>
              <div>
                <h3>Customer Name</h3>
                <h5>Customer Position</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
