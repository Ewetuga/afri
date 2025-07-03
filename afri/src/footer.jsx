import './App.css'
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Hizo</h2>
          <p>Connecting Africa, one payment at a time.</p>
          <div className="footer-apps">
            <a href="#" className="footer-app-btn">Download on App Store</a>
            <a href="#" className="footer-app-btn">Get it on Google Play</a>
          </div>
        </div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
          <a href="#">Careers</a>
        </nav>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@afripay.com</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Address: 123 AfriPay Street, Lagos, Nigeria</p>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={e => e.preventDefault()} className="footer-newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Twitter" className="footer-social-icon">🐦</a>
          <a href="#" aria-label="Facebook" className="footer-social-icon">📘</a>
          <a href="#" aria-label="Instagram" className="footer-social-icon">📸</a>
          <a href="#" aria-label="LinkedIn" className="footer-social-icon">💼</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
        <p>&copy; {new Date().getFullYear()} AfriPay. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer