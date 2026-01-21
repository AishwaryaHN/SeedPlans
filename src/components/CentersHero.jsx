import React from "react";
import { Link } from "react-router-dom";
import "./CentersHero.css";

const CentersHero = () => {
  return (
    <section className="centers-hero">
      <div className="centers-hero-overlay"></div>

      <div className="centers-hero-content">
        <h1>Centers</h1>
      </div>

      <div className="centers-breadcrumb-bar">
        <div className="container">
          <nav className="centers-breadcrumb">
            <Link to="/" className="breadcrumb-home">🏠</Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active">Centers</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CentersHero;
