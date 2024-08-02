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
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MinimalCarousel;
