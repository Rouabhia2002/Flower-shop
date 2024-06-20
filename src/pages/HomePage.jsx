import React from 'react';
import Navbarr from '../components/Navbarr/Navbarr.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Why from '../components/Why/Why.jsx';
import Testimonial from '../components/Testimonial/Testimonial.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Shop from '../components/Shop/Shop.jsx';
import Footer from '../components/Footer/Footer.jsx';
const HomePage = () => {
  return (
    <>
      <Navbarr />
      <Hero />
      <Shop />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
