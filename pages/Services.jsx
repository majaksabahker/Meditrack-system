import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container">
      <h1 className="title">Our Medical Services</h1>

      <ul className="service-list">
        <li>🩺 General Checkups</li>
        <li>💉 Vaccination & Immunization</li>
        <li>📋 Health Record Management</li>
        <li>📞 Teleconsultation Services</li>
      </ul>

      <div className="contact-form">
        <h2>Request a Service</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select a Service</option>
            <option value="checkup">General Checkup</option>
            <option value="vaccine">Vaccination</option>
            <option value="records">Health Records</option>
            <option value="teleconsult">Teleconsultation</option>
          </select>
          <textarea placeholder="Additional Notes" rows="4"></textarea>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Services;
