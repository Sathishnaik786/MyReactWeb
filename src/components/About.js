import React from 'react';
import '../About.css'; // Ensure this path is correct
import Ourmission from '../assest/images/Our Mission.jpg'; // Update the path to your images
import AboutUs from '../assest/images/AboutUs.png'; // Update the path to your images
import Services from '../assest/images/Services.png'; // Update the path to your images

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-image-container">
          <img src={Ourmission} alt="Our Team" className="about-image" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Meetechsolutions! We are a team of passionate individuals dedicated to providing the best software solutions to our clients. Our mission is to innovate and deliver top-notch services that exceed expectations.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to leverage technology to create impactful solutions that drive success for our clients. We aim to be a trusted partner, delivering value through our expertise and commitment.
          </p>
        </div>
        <div className="about-image-container">
          <img src={Services} alt="Our Mission" className="about-image" />
        </div>
      </section>

      <section className="about-section">
        <div className="about-image-container">
          <img src={AboutUs} alt="Our Vision" className="about-image" />
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in software development, recognized for our innovation, quality, and customer-centric approach. We strive to continuously evolve and make a positive impact in the industry.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
