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
    { id: 1, name: 'MeeBuddy', logo: client1, url: 'https://meebuddy.com/' },
    { id: 2, name: 'Mee24news', logo: client2, url: 'https://meenews.co/' },
    { id: 3, name: 'Shri Bharathi Real Estate', logo: client3, url: 'https://www.bharathirealestate.com/' },
    { id: 4, name: 'Lotus Dental Care', logo: client4, url: 'https://LotusDentalClinic.com' },
    { id: 5, name: 'Startup Amaravati', logo: client5, url: 'https://startupamaravati.com/' },
    { id: 6, name: 'Eswar Dental Care  ', logo: client6, url: 'https://eswardentalclinic.com/' },
    { id: 7, name: 'Dr.Mv Rao Diabetes', logo: client7, url: 'https://www.drmvraodiabeteshospitals.com/' },
    // Add more companies as needed
  ];

  return (
    <div className="associated-companies-container">
      <div className="company-scroller">
        {companies.map(company => (
          <div key={company.id} className="company-item">
            <a href={company.url} target="_blank" rel="noopener noreferrer">
              <img src={company.logo} alt={company.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatedCompanies;
