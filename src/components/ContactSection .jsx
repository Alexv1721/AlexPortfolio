import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navigation from './Navigation';
import '../styles/contact.css'; // Importing the external CSS

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_vvui6u7',
        'template_zyc0vun',
        formData,
        'iOURGJ2s1fJ6kBxeq'
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-page-wrapper">
      <Navigation />
      <section id="contact" className="contact-section">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">Have a project in mind? Let's talk.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </section>
    </div>
  );
};

export default ContactSection;