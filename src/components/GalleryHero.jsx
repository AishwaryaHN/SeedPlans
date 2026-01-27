import React from "react";
import { Link } from "react-router-dom";
import "./GalleryHero.css";

const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero-overlay"></div>

      <div className="gallery-hero-content">
        <h1>Gallery</h1>
        <p className="active">Moments from our environmental activities and green missions</p>

      </div>

      <div className="gallery-breadcrumb-bar">
        <div className="container">
          <nav className="gallery-breadcrumb">
            <Link to="/" className="breadcrumb-home">🏠</Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active"> Our Gallery</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
