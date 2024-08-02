import React from 'react';
import 'swiper/swiper-bundle.css';
import '../Home.css'; // Ensure this path is correct
import ourMission from '../assest/images/Our Mission.jpg'; // Update the path to your images
import aboutUs from '../assest/images/AboutUs.png'; // Update the path to your images
import services from '../assest/images/Services.png'; // Update the path to your images
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import  Carousel  from './Carousel';
import AssociatedCompanies from '../components/AssociatedCompanies';
const Home = () => {
  return (
    <div className="home">
<<<<<<< HEAD
      <Carousel /><br />
      <AssociatedCompanies />
=======
      <header className="home-header">
        <h1><b>Welcome to MeeCodex Solutions</b></h1>
      </header>

>>>>>>> 2fbe3d525d7e2d315290dbe6bd6216dd30be6663
      <div className="home-content">
        <div className="home-section">
          <img src={ourMission} alt="Our Mission" className="home-section-image" />
          <h3>Our Mission</h3>
          <p>We aim to provide the best services to our customers with a focus on innovation and quality.</p>
        </div>
        <div className="home-section">
          <img src={aboutUs} alt="About Us" className="home-section-image" />
          <h3>About Us</h3>
          <p>Learn more about our team, our values, and our commitment to excellence.</p>
        </div>
        <div className="home-section">
          <img src={services} alt="Services" className="home-section-image" />
          <h3>Services</h3>
          <p>We offer a range of services tailored to meet your needs, from consulting to full-scale development.</p>
        </div>
        <div className="home-section">
          <center>
            <h3>Contact Us</h3>
            <p>Get in touch with us for any inquiries, support, or feedback. We are here to help!</p>
          </center>
        </div>
      </div>
      <div>
    <center>
      <FAQ />
      <Testimonials />
    </center>
  </div>
    </div>
  );
};


export default Home;