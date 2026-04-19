import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">NextPath</div>
      <div className="navbar-links">
        <a href="#solutions">Solutions</a>
        <a href="#platform">Platform</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="navbar-actions">
        <a href="#login" className="login-link">Log In</a>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </nav>
  );
}