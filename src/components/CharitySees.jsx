import React from 'react';
import './CharitySees.css';

const CharitySees = () => {
  return (
    <section className="charity-section">
      {/* Background Image */}
      <div 
        className="charity-background"
        style={{
          backgroundImage: 'url(./images/grp.png)'
        }}
      >
        <div className="background-overlay"></div>
      </div>
      
      <div className="container">
        <div className="charity-content">
          {/* Header with hashtag */}
          <div className="charity-header">
            <h2 className="charity-title">
              <span className="title-text">Be a Part of the Change</span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="charity-text">
            <p className="charity-description">
              Empowering Communities Through Education. For over 25 years, we've been helping children 
              in Madurai learn and thrive through education, support, and community care. 
              Join us in creating lasting impact and transforming lives.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="charity-buttons">
            <button className="btn btn-donate">
              SUPPORT OUR MISSION
            </button>
            <button className="btn btn-read">
              VISIT OUR CENTERS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySees;