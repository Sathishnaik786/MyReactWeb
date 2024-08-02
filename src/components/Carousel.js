import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Carousel1 from '../assest/images/carousel1.jpg'
import Carousel2 from '../assest/images/carousel2.jpg'
import Carousel3 from '../assest/images/carousel1.jpg'

const MinimalCarousel = () => (
  <Carousel interval={5000}> {/* 10 seconds interval */}
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= {Carousel1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1><b>Welcome to MeeCodex Solutions</b></h1>
        <p>At Meetech Solutions, innovation meets reliability, crafting the future of technology with precision and expertise.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Carousel2}
        alt="Second slide"
      />
      <Carousel.Caption>
      <h1><b>Welcome to MeeCodex Solutions</b></h1>
      <p>Transforming challenges into opportunities, Meetech Solutions delivers tailored software solutions that drive growth and success.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Carousel3}
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1><b>Welcome to MeeCodex Solutions</b></h1>
      <p>With Meetech Solutions, excellence in technology is not just a promise—it's our commitment to every client we serve.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MinimalCarousel;
