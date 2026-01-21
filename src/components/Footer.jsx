import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Column 1 - About & Contact */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <span className="logo-icon">🌱</span>
            <div>
              <h3>SEED PLAN</h3>
              <small>Society for Education and Empowerment of the Disadvantaged</small>
            </div>
          </div>

          <p className="footer-text">
            For over 25 years, we've been helping children in Madurai learn and thrive 
            through education, support, and community care.
          </p>

          <ul className="footer-contact">
            <li>Seed Plan, 375 East Street, Karumbalai</li>
            <li>Madurai – 625020, Tamil Nadu, India</li>
            <li>📞 +91 93425 77990</li>
            <li>✉️ seedvikki@gmail.com</li>
          </ul>
        </div>

        {/* Column 2 - Our Centers */}
        <div className="footer-col">
          <h4 className="footer-title">Our Centers</h4>
          <ul className="footer-links">
            <li>Karumbalai Center</li>
            <li>Thathaneri Center</li>
            <li>Alwarpuram Center</li>
            <li>Mathiyiam Center</li>
            <li>Kalmedu Center</li>
            <li>Sambakudi Center</li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Our History</li>
            <li>Our Centers</li>
            <li>About the Founder</li>
            <li>About Our Director</li>
            <li>Alumni</li>
            <li>News & Events</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 - News Section */}
        <div className="footer-col">
          <h4 className="footer-title">Recent Updates</h4>
          <div className="footer-news">
            <div className="news-item">
              <p><strong>11th anniversary of Prof Ted Adams leaving us</strong></p>
              <small>Commemorating our founder's legacy</small>
            </div>
            <div className="news-item">
              <p><strong>Pongal Activities - Art from waste</strong></p>
              <small>Creative celebrations at our centers</small>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright © 2025 Seed Plan - All Rights Reserved.</p>
          <div className="footer-powered">
            <span>Powered by dedicated volunteers and community support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;