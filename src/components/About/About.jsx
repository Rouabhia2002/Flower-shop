import React from 'react';
import Button from 'react-bootstrap/Button';
import './About.css'; // Ensure you import the CSS file

const About = () => {
  return (
    <div className='about'>
      <div className='pics'>
        <div className="rounded-top-div"></div>
        <div className="rounded2-top-div"></div>
        
      </div>
      <div className='text'>
        <h5>ABOUT FLORIST</h5>
        <h1>Blossoming Your Special Moments with Nature's Finest</h1>
        <p>Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
        <Button variant="primary">READ MORE</Button>
      </div>
    </div>
  );
}

export default About;