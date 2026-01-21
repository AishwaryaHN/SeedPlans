import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container testimonials-grid">

        {/* Left Content */}
        <div className="testimonials-intro">
          <h3 className="section-title">Alumni</h3>
          <p className="section-desc">
            Success stories of students who transformed their lives through education 
            and are now giving back to their communities.
          </p>

          <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Testimonial 1 - Director */}
        <div className="testimonial-card">
          <div className="quote-icon">“</div>
          <h4>
            S. Vikki, <span>Director of Seed Plan</span>
          </h4>
          <p>
            Growing up in Karumbalai, I joined Seed Plan as a student in Class 5. 
            The support and guidance I received helped me excel in my studies and 
            discover my passion for social work. After earning a Master's degree 
            in Social Work from Loyola College, Chennai, I returned to Madurai to 
            give back to my community.
          </p>
        </div>

        {/* Testimonial 2 - Alumni Volunteer */}
        <div className="testimonial-card">
          <div className="quote-icon">“</div>
          <h4>
            Karthi, <span>First Volunteer & Community Leader</span>
          </h4>
          <p>
            I was the first youngster from Karumbalai to work with Prof. Ted Adams 
            in starting the study center. My passionate desire to improve the lives 
            of other youngsters in our community became the foundation of Seed Plan. 
            Today, seeing youth who went to college returning as volunteers to help 
            others is truly inspiring.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;