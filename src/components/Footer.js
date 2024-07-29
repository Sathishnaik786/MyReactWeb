import React from 'react';
import '../Footer.css';
import logo from '../mee-logo.png'; // Update the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-section-1">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="footer-contact">
          <p>Location: Your Location</p>
          <p>Address: Your Address</p>
          <p>Email: meecodex@gmail.com</p>
          <p>Phone: +91 63XXXXXXX0 </p>
        </div>
      </div>
      <div className="footer-contact">
          <h3>Google Map</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0275739658723!2d80.57313107368502!3d16.4234259298614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4466dcab787509d5%3A0x7cb1445284f759ad!2sMeeTech%20Solutions!5e0!3m2!1sen!2sin!4v1722154448225!5m2!1sen!2sin"
            width="300"
            height="250"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      <div className="footer-section footer-section-2">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/sign-up">Sign Up</a></li>
        </ul>
      </div>
      <div className="footer-section footer-section-3">
        <h3>Subscribe to Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button type="button">Subscribe</button>
      </div>
      <div className="footer-section footer-section-4">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
