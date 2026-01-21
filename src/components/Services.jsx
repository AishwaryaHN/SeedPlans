import React from 'react';
import { Heart, Users, BookOpen, Home, Clock, Target } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Home size={40} />,
      title: "After School Study Centers",
      description: "Safe spaces with electricity for students to study from 6-9pm daily. Providing quiet places with proper lighting for children who lack these facilities at home.",
      linkText: "Visit Centers →"
    },
    {
      id: 2,
      icon: <BookOpen size={40} />,
      title: "Education Support",
      description: "Volunteer-assisted homework help, academic guidance, and extra-curricular activities to create successful paths for students.",
      linkText: "Learn About Programs →"
    },
    {
      id: 3,
      icon: <Users size={40} />,
      title: "Community Building",
      description: "Youth volunteers who went to college help younger children achieve the same goal. A community helping itself grow and thrive.",
      linkText: "Join Our Community →"
    },
    {
      id: 4,
      icon: <Clock size={40} />,
      title: "25+ Years of Service",
      description: "For over 25 years, we've been helping children in Madurai learn and thrive through education, support, and community care.",
      linkText: "Read Our History →"
    },
    {
      id: 5,
      icon: <Target size={40} />,
      title: "Empowerment Focus",
      description: "Moving beyond rote learning to focus on critical thinking, creativity, and understanding - uplifting families through education.",
      linkText: "See Impact →"
    },
    {
      id: 6,
      icon: <Heart size={40} />,
      title: "Be Part of Change",
      description: "Join us in empowering communities through education. Your support creates lasting impact in children's lives across Madurai.",
      linkText: "Get Involved →"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Empowering Communities Through Education - Building brighter futures since 1999
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* Icon with gold background */}
              <div className="service-icon">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="service-title">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="service-description">
                {service.description}
              </p>
              
              {/* Read More Link */}
              <a href="#" className="service-link">
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;