import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>MediTrack Health Systems</h1>
        <p>Your Digital Health Companion</p>
      </header>

      <section className="home-hero">
        <h2>Welcome to MediTrack Health Systems</h2>
        <p>
          Streamline your healthcare experience. Book appointments, manage health records,
          receive alerts, and stay connected with your medical providers all in one place.
        </p>

        <div className="home-buttons">
          <a href="/dashboard" className="home-btn">Go to Dashboard</a>
          <a href="/services" className="home-btn">Our Services</a>
          <a href="/contact" className="home-btn">Contact Us</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Smart Appointment Scheduling</h3>
          <p>Book appointments with ease and receive timely reminders via SMS and email.</p>
        </div>
        <div className="feature">
          <h3>Secure Medical Records</h3>
          <p>Access your health history securely anytime, anywhere HIPAA compliant.</p>
        </div>

        <div className="feature">
          <h3>Community Health Integration</h3>
          <p>Connect with local clinics and health workers to ensure accessible care for all.</p>
        </div>

        <div className="feature">
          <h3>Real-Time Health Monitoring</h3>
          <p>Monitor vitals, symptoms, and medication adherence with smart device integration.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 MediTrack Health Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
