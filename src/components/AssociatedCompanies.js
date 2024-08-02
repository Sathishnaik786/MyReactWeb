// src/components/AssociatedCompanies.js
import React from 'react';
import '../AssociatedCompanies.css';
import client1 from '../assest/images/client-1.png';
import client2 from '../assest/images/client-2.png';
import client3 from '../assest/images/client-3.png';
import client4 from '../assest/images/client-4.png';
import client5 from '../assest/images/client-5.png';
import client6 from '../assest/images/client-6.png';
import client7 from '../assest/images/client-7.png';


const AssociatedCompanies = () => {
  const companies = [
    { id: 1, name: 'Startup Amaravathi', logo: client1 },
    { id: 1, name: 'Startup Amaravathi', logo: client2 },
    { id: 1, name: 'Startup Amaravathi', logo: client3 },
    { id: 1, name: 'Startup Amaravathi', logo: client4 },
    { id: 1, name: 'Startup Amaravathi', logo: client5 },
    { id: 1, name: 'Startup Amaravathi', logo: client6 },
    { id: 1, name: 'Startup Amaravathi', logo: client7 },


    // Add more companies as needed
  ];

  return (
    <div className="associated-companies-container">
      <div className="company-scroller">
        {companies.map(company => (
          <div key={company.id} className="company-item">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatedCompanies;
