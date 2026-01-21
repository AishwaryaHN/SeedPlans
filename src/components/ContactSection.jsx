import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <span className="contact-underline"></span>
          <p>
            Better yet, see us in person! Visit our centers or reach out to us 
            to learn more about how you can support education and empowerment 
            in Madurai communities.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />
            <input type="text" placeholder="Phone" />
          </div>

          <div className="form-row">
            <textarea placeholder="Message"></textarea>
          </div>

          <div className="form-action">
            <button type="submit" className="btn btn-about">
              SEND MESSAGE
            </button>
          </div>
        </form>

        <div className="contact-info">
          <div className="contact-info-item">
            <h4>Our Address</h4>
            <p>Seed Plan, 375 East Street, Karumbalai<br />Madurai – 625020, Tamil Nadu, India</p>
          </div>
          <div className="contact-info-item">
            <h4>Contact Details</h4>
            <p>📞 +91 93425 77990<br />✉️ seedvikki@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <h4>Visit Our Centers</h4>
            <p>Karumbalai, Thathaneri, Alwarpuram,<br />Mathiyiam, Kalmedu, Sambakudi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;