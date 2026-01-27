import React from "react";
import { Link } from "react-router-dom";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Contact Us</h1>
        <p>
            Better yet, see us in person! Visit our centers or reach out to us 
            to learn more about how you can support education and empowerment 
            in Madurai communities.
          </p>
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-home">
              🏠
            </Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active">Contact Us</span>
            
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
