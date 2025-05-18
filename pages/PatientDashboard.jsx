import React from 'react';
import './PatientDashboard.css';

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <h2>Patient Dashboard</h2>
        <p>Welcome to MediTrack health System. Your personalized healthcare hub.</p>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <p>You have no upcoming appointments. Book one now.</p>
        </div>

        <div className="dashboard-card">
          <h3>Health Records</h3>
          <p>View your past visits, lab reports, and prescriptions.</p>
        </div>

        <div className="dashboard-card">
          <h3>Notifications</h3>
          <p>Stay updated with messages from your care team.</p>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2025 MediTrack Health System. Empowering community health.</p>
      </footer>
    </div>
  );
};

export default PatientDashboard;
