import React from 'react';

export function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Start your journey</h2>
        <div className="cta-form">
          <input type="email" placeholder="Email address" />
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-logo">NextPath</div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
        </div>
        <div>
          © 2024 NextPath Architecture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
