import React from "react";
import { Link } from "react-router-dom";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">
        <h1>About Us</h1>
      </div>

      <div className="about-breadcrumb-bar">
        <div className="container">
          <nav className="about-breadcrumb">
            <Link to="/" className="breadcrumb-home">🏠</Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active">About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
