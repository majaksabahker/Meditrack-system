import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <p className="subtitle">Manage your health records, appointments, and track your wellness journey.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>📅 Appointments</h2>
          <p>3 Upcoming</p>
        </div>
        <div className="stat-card">
          <h2>📝 Records</h2>
          <p>12 Health Logs</p>
        </div>
        <div className="stat-card">
          <h2>🏃 Progress</h2>
          <p>85% Completed</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button>View Appointments</button>
        <button>Update Records</button>
        <button>Track Progress</button>
      </div>
    </div>
  );
};

export default Dashboard;
