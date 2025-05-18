import React from 'react';
import './ClinicDashboard.css';

const ClinicDashboard = () => {
  return (
    <div className="clinic-dashboard">
      <header className="dashboard-header">
        <h2>Clinic Dashboard</h2>
        <p>Manage your clinic's services, appointments, and staff in one place.</p>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-card">
          <h3>Clinic Profile</h3>
          <p>Update your address, contact details, and operating hours.</p>
        </div>

        <div className="dashboard-card">
          <h3>Appointments</h3>
          <p>View, approve, or reschedule upcoming appointments with patients.</p>
        </div>

        <div className="dashboard-card">
          <h3>Medical Staff</h3>
          <p>Manage doctors, nurses, and staff members assigned to your clinic.</p>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2025 MediTrack Health System. Supporting clinics, empowering communities.</p>
      </footer>
    </div>
  );
};

export default ClinicDashboard;
