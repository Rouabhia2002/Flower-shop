import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send('service_6dmgc4o', 'template_ohk53os', data, 'kTaQ8s5HqwiKSJ34N')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className='contact'>
      <div className='textt'>
        <h1>Get In Touch With Us</h1>
        <p>Share some details here. This is a flexible section where you can share anything you want. It could be details or some information.</p>
        <h3>Address</h3>
        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        <div className='contact-info'>
          <h3>Phone</h3>
          <span>(+91) 987 654 321</span>

          <h3>Email</h3>
          <span>info@contact.com</span>
        </div>
        <h3>Social media</h3>
        <div className="social-media">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><AiFillYoutube /></a>
        </div>
      </div>
      <div className='form'>
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />

          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />

          <label>Email</label>
          <input type="email" {...register('email', { required: true })} />

          <label>Comment</label>
          <textarea {...register('comment', { required: true })}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
