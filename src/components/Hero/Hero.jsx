import React from 'react'
import Button from 'react-bootstrap/Button';
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
      <h5>WELCOME TO FLORIST</h5>
      <h1>Let's Make Beautiful Flowers a Part of Your Life.</h1>
      <p>Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.</p>
      <Button variant="primary">SHOP NOW</Button>
    </div>
  )
}

export default Hero
