// src/components/FAQ.js

import React, { useState } from 'react';
import '../FAQ.css';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of software development services including web development, mobile app development, and custom software solutions.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact our support team via email at support@example.com or call us at +1234567890.',
  },
  {
    question: 'What are your business hours?',
    answer: 'Our business hours are Monday to Friday, 10 AM to 6 PM IST.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
