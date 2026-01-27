import React from 'react';
import './Volunteers.css';
import{ useNavigate } from "react-router-dom";

const Volunteers = () => {
  const navigate = useNavigate(); 
  const volunteers = [
    { 
      id: 1, 
      name: 'S. Vikki', 
      role: 'Director & Alumni',
      description: 'Joined Seed Plan in Class 5, now leads the organization after MSW from Loyola College'
    },
    { 
      id: 2, 
      name: 'Karthi', 
      role: 'First Volunteer',
      description: 'Started with Prof. Ted Adams in 1999, passionate community leader from Karumbalai'
    },
    { 
      id: 3, 
      name: 'College Youth', 
      role: 'Volunteer Team',
      description: 'Students who went to college and return to help younger children achieve the same'
    },
    { 
      id: 4, 
      name: 'Community Members', 
      role: 'Local Support',
      description: 'Dedicated individuals from Madurai communities supporting education initiatives'
    }
  ];

  return (
    <section className="volunteers-section">
      <div className="container">
        {/* Volunteer Title */}
        <div className="section-title-container">
          <div className="title-line-left"></div>
          <h2 className="section-title">OUR VOLUNTEERS</h2>
          <div className="title-line-right"></div>
        </div>
        
        {/* Quote Section */}
        <div className="quote-container">
          <p className="quote-text">
            Our story has been one of a community helping itself. The initial volunteers were youth who had managed to go to college, and helped children at the center achieve the same goal. Join our cycle of empowerment.
          </p>
        </div>

        {/* Volunteer Cards */}
        <div className="volunteers-grid">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="volunteer-card">
              <div className="volunteer-image">
                <div className="image-placeholder">
                  <span className="initials">
                    {volunteer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="volunteer-info">
                <h3 className="volunteer-name">{volunteer.name}</h3>
                <p className="volunteer-role">{volunteer.role}</p>
                <p className="volunteer-description">{volunteer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Button */}
        <div className="volunteer-button-container">
          <button className="volunteer-button" onClick={() => navigate("/volunteer-form")}>
            BECOME A VOLUNTEER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;