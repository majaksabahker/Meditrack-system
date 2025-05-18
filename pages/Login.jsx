import React from 'react';
import './Login.css'; // Link to external CSS

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>MediTrack Login</h2>
        <p>Access your dashboard securely</p>
        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" required />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
