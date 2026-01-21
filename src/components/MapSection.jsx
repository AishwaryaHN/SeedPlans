import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        title="Seed Plan - Karumbalai Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.379288302296!2d78.1374480745969!3d9.925939573492405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58a9c6b1c1f%3A0x5c5a5b5b5b5b5b5b!2sKarumbalai%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <div className="map-overlay-info">
        <div className="map-info-card">
          <h3>Visit Our Centers</h3>
          <ul className="center-locations">
            <li><strong>Karumbalai Center:</strong> 375 East Street, Karumbalai, Madurai</li>
            <li><strong>Thathaneri Center:</strong> Thathaneri, Madurai</li>
            <li><strong>Alwarpuram Center:</strong> Alwarpuram, Madurai</li>
            <li><strong>Mathiyiam Center:</strong> Mathiyiam, Madurai</li>
            <li><strong>Kalmedu Center:</strong> Kalmedu, Madurai</li>
            <li><strong>Sambakudi Center:</strong> Sambakudi, Madurai</li>
          </ul>
          <p className="map-timing">
            <strong>Center Timings:</strong> 6:00 PM to 9:00 PM (Evenings & Weekends)
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;