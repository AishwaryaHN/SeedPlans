import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, BookOpen } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      id: 1,
      title: "Society for Education and Empowerment of the Disadvantaged",
      subtitle: "25+ Years of Transforming Lives",
      description: "Empowering children through education, support, and community care in Madurai",
      stats: "2,500+ Children Impacted",
      icon: <Sparkles size={20} />,
      background: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: "Empowering Communities Through Education",
      subtitle: "Create Lasting Change",
      description: "Join our mission to build brighter futures for underprivileged children",
      stats: "15 Study Centers",
      icon: <BookOpen size={20} />,
      background: './images/AllGrp.png'
    },
    {
      id: 3,
      title: "Seed Plan - Changing Lives Since 1999",
      subtitle: "After-School Excellence",
      description: "Providing holistic education and development opportunities across Madurai",
      stats: "100+ Volunteers",
      icon: <Heart size={20} />,
      background: './images/grp.png'
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background with Gradient Overlay */}
      <div className="carousel-background">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`background-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.background})` }}
          />
        ))}
        <div className="gradient-overlay"></div>
      </div>

      {/* Floating Elements for Depth */}
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      {/* Main Content */}
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`content-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="container">
              <div className="hero-content">
                {/* Badge/Status */}
                <div className="impact-badge">
                  {slide.icon}
                  <span className="impact-text">{slide.stats}</span>
                </div>

                {/* Title with Animation */}
                <div className="title-wrapper">
                  <h1 className="main-title">
                    {slide.title}
                  </h1>
                  <div className="title-underline"></div>
                </div>

                {/* Subtitle with Emphasis */}
                <div className="subtitle-section">
                  <h2 className="subtitle">
                    {slide.subtitle}
                  </h2>
                  <div className="highlight-bar"></div>
                </div>

                {/* Description with Fade-in Effect */}
                <div className="description-section">
                  <p className="description">
                    {slide.description}
                  </p>
                </div>

                {/* CTA Button with Icon */}
                <div className="hero-action">
                  <button className="cta-button">
                    <span className="button-text">Join Our Mission</span>
                    <span className="button-icon">→</span>
                    <div className="button-shine"></div>
                  </button>
                  
                  {/* Secondary Action */}
                  <button className="secondary-button">
                    Learn More About Our Work
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="slide-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation */}
      <div className="carousel-navigation">
        <button 
          className="nav-button nav-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>
        
        <button 
          className="nav-button nav-next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Social Proof Badge */}
      <div className="social-proof">
        <div className="trust-badge">
          <span className="trust-icon">✓</span>
          <span className="trust-text">Trusted by 500+ Donors</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;