import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import HomeIcon from '@mui/icons-material/Home';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Stack from '@mui/material/Stack';
import '../Contact.css'; // Ensure this path is correct

const SimpleAlert = () => (
  <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
    Your message Sent successful. Thank you !
  </Alert>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneNumber, subject, message } = formData;

    if (!fullName || !phoneNumber || !subject || !message) {
      setFormError('Please fill out all fields.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
    console.log('Form Data Submitted: ', formData);

    // Reset form after successful submission
    setFormData({
      fullName: '',
      phoneNumber: '',
      subject: '',
      message: '',
    });

    // Optionally hide the alert after some time
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000); // Hide the alert after 5 seconds
  };

  return (
    <div className="contact-page">
      <section className="contact-info">
        <center>
          <h2>Contact Us</h2>
        </center>
        <div className="contact-item">
        <Button variant="contained" color="primary" startIcon={<HomeIcon />}> Address </Button>
          <p>Villa 7, NSR Villas, Mangalagiri, Atmakur Rural, Andhra Pradesh 522503</p>
        </div>
        <div className="contact-item">
        <Button variant="contained" color="primary" startIcon={<PhoneForwardedIcon />}> Phone </Button>
          <p>+91 6304XXXXX0</p>
        </div>
        <div className="contact-item">
        <Button variant="contained" color="primary" startIcon={<EmailIcon />}> Email </Button>
          <p>info@meecodex@gmail.com</p>
        </div>
        <center> <div className="contact-item">
          
        <Button variant="contained" color="primary" startIcon={<PinDropIcon />}> Find Our Location </Button>
          

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0275739658723!2d80.57313107368502!3d16.4234259298614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4466dcab787509d5%3A0x7cb1445284f759ad!2sMeeTech%20Solutions!5e0!3m2!1sen!2sin!4v1722154448225!5m2!1sen!2sin"
            width="800"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        </center>
      </section>

      <section className="contact-form">
        <center>
          <h2>Submit Form</h2>
        </center>
        {formSubmitted && <SimpleAlert />}
        {!formSubmitted && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Your 10-Digit Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {formError && <p className="form-error">{formError}</p>}
            <center>
            <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" startIcon={<Stack />}>  Submit </Button>
            </Stack>
            </center>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
