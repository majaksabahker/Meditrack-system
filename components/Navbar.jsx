import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/logo" className="logo-link">
      <img src="src/assets/MediTrack.jpeg" alt="Logo" className="logo" />
      </Link>

      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/patient" className="nav-link">Patient Dashboard</Link>
      <Link to="/clinic" className="nav-link">Clinic Dashboard</Link>
    </nav>
  );
};

export default Navbar;
