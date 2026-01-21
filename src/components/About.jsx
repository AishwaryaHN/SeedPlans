import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* Left Column - Text Content */}
          <div className="about-content">
            {/* Section Header */}
            <div className="about-header">
              <h2 className="about-title">
                <span className="title-text">Our History</span>
              </h2>
            </div>
            
            {/* Text Content */}
            <div className="about-text">
              <p className="about-description">
                Seed Plan was founded in 1999 by Prof. Ted Adams. In collaboration with Karthi, a youngster from Karumbalai, and Dr. Taj Adams he started an after school study center at Karumbalai, to provide a quiet place for students and also a place with electricity as many students did not have electric lights at home. Beginning with Karthi's passionate desire to improve the lives of other youngsters in the community, our story has been one of a community helping itself.
              </p>
              
              <p className="about-description">
                The initial volunteers were youth who had managed to go to college, and helped children at the center achieve the same goal. Seed Plan then started centers at Thathaneri and Sambakudi. In 2020, with support from Asha for Education, Seed Plan started centers in Alwarpuram, Mathiyiam and Kalmedu.
              </p>
            </div>
            
            {/* Divider Line */} 
            {/* <div className="about-divider">
              <div className="divider-line"></div>
            </div> */}
            
            {/* Read More Button */}
            <div className="about-action">
              <button className="btn btn-about">
                READ MORE ABOUT OUR HISTORY
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="https://img1.wsimg.com/isteam/ip/5276e802-4936-4f26-90d6-9f9037fd5ed4/SeedStudents2.jpg/:/rs=w:1170,h:800" 
                alt="Seed Plan students learning together"
                className="about-img"
              />
              <div className="image-overlay"></div>
              {/* Decorative element */}
              <div className="image-badge">
                <span className="badge-text">25+</span>
                <span className="badge-label">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;