import React from 'react';
import '../Services.css'; // Ensure this path is correct
import webDevelopment from '../assest/images/webdevelopment.jpg'; // Ensure this path is correct
import appDevelopment from '../assest/images/appdevelopment.jpg'; // Ensure this path is correct
import seoImage from '../assest/images/seo.jpg'; // Ensure this path is correct
import supportImage from '../assest/images/support.jpg'; // Ensure this path is correct

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-section">
        <div className="service-card">
          <div className="service-icon">
            <img src={webDevelopment} alt="Web Development" className="service-image" />
          </div>
          <h3>Web Development</h3>
          <p>
            We create responsive and dynamic websites tailored to your business needs using the latest technologies and trends.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={appDevelopment} alt="App Development" className="service-image" />
          </div>
          <h3>App Development</h3>
          <p>
            Our team develops intuitive and high-performance mobile applications for both iOS and Android platforms.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={seoImage} alt="SEO Optimization" className="service-image" />
          </div>
          <h3>SEO Optimization</h3>
          <p>
            We improve your website's visibility on search engines through our expert SEO services, driving more traffic to your site.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={supportImage} alt="Support & Maintenance" className="service-image" />
          </div>
          <h3>Support & Maintenance</h3>
          <p>
            Our dedicated team provides continuous support and maintenance to ensure your applications run smoothly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
