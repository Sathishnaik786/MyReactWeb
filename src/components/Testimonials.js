// src/components/Testimonials.js

import React from 'react';
import '../Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'This is an amazing service! Highly recommended.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'I had a wonderful experience. Will use again.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    text: 'Exceptional quality and fantastic support!',
    image: 'https://via.placeholder.com/150',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
