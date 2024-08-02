import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const iconStyle = { color: '#f65658' };

  return (
    <MDBFooter
      style={{
        background: 'linear-gradient(to right, #6b6b83, #3b8d99)',
      }}
      className='text-center text-lg-start text-white'
    >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>"Stay Connected: Follow Us on Social Media for the Latest Updates and Insights!"</span>
        </div>

        <div>
          <a href='https://facebook.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='facebook-f'/>
          </a>
          <a href='https://twitter.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='twitter' />
          </a>
          <a href='https://google.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='google' />
          </a>
          <a href='https://instagram.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='instagram' />
          </a>
          <a href='https://linkedin.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='linkedin' />
          </a>
          <a href='https://github.com' className='me-4 text-reset text-white' target="_blank" rel="noopener noreferrer">
            <MDBIcon style={iconStyle} fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon style={iconStyle} icon='gem' className='me-3' />
                MeeCodex Solutions
              </h6>
              <h6>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </h6>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <h6>
                <a href='/' className='text-reset text-white'>
                  Home
                </a>
              </h6>
              <h6>
                <a href='/about' className='text-reset text-white'>
                  About
                </a>
              </h6>
              <h6>
                <a href='/services' className='text-reset text-white'>
                  Services
                </a>
              </h6>
              <h6>
                <a href='/contact' className='text-reset text-white'>
                  Contact
                </a>
              </h6>
              <h6>
                <a href='/contact' className='text-reset text-white'>
                  Terms & Conditions
                </a>
              </h6>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <h6>
                <a href='/services' className='text-reset text-white'>
                  Web Design
                </a>
              </h6>
              <h6>
                <a href='/services' className='text-reset text-white'>
                  Web Development
                </a>
              </h6>
              <h6>
                <a href='/services' className='text-reset text-white'>
                  Product Management
                </a>
              </h6>
              <h6>
                <a href='/services' className='text-reset text-white'>
                  Marketing
                </a>
              </h6>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <h6>
                <MDBIcon style={iconStyle} icon='home' className='me-2' />
                Villa-7, NSR Villas, near NRT Tech Park, Mangalagiri, Atmakur Rural, Andhra Pradesh 522503              </h6>
              <h6>
                <MDBIcon style={iconStyle} icon='envelope' className='me-3' />
                meecodex@gmail.com
              </h6>
              <h6>
                <MDBIcon style={iconStyle} icon='phone' className='me-3' /> +91 80XXXXXXXX
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: 
        <a className='text-reset text-white fw-bold' href='https://meetechsolutions.com/'>
          MeeTech Solutions
        </a>
      </div>
    </MDBFooter>
  );
}
