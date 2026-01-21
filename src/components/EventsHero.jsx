import React from "react";
import { Link } from "react-router-dom";
import "./EventsHero.css";

const EventsHero = () => {
  return (
    <section className="events-hero">
      <div className="events-hero-overlay"></div>

      <div className="events-hero-content">
        <h1>Event List View</h1>
      </div>

      <div className="events-breadcrumb-bar">
        <div className="container">
          <nav className="events-breadcrumb">
            <Link to="/" className="breadcrumb-home">🏠</Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active">Events List View</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
