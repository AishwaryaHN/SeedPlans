import React, { useState } from "react";
import "./Causes.css";

const Causes = () => {
  const [activeTab, setActiveTab] = useState("centers");

  const centers = [
    {
      id: 1,
      title: "After School Study Centers",
      description:
        "We run after school study centers in Karumbalai, Thathaneri, Alwarpuram, Mathiyiam, Kalmedu and Sambakudi. The centers are open from 6 to 9pm in the evenings, and on weekends.",
      image:
        "./images/dance.png"}
  ];

  const programs = [
    {
      id: 2,
      title: "Volunteer Support Program",
      description:
        "Volunteers help children with school work and conduct extra-curricular activities to guide them toward successful futures.",
      image:
        "https://img1.wsimg.com/isteam/ip/5276e802-4936-4f26-90d6-9f9037fd5ed4/SeedVolunteers.png/:/rs=w:1170,h:800"
    },
    {
      id: 3,
      title: "Community Empowerment Initiatives",
      description:
        "Providing electricity access, study materials, and educational resources for children lacking basic amenities.",
      image:
        "https://img1.wsimg.com/isteam/ip/5276e802-4936-4f26-90d6-9f9037fd5ed4/SeedStudents2.jpg/:/rs=w:1170,h:800"
    }
  ];

  const renderCards = (data) =>
    data.map((item) => (
      <div key={item.id} className="cause-card fade-in">
        <div className="cause-image">
          <img src={item.image} alt={item.title} className="cause-img" />
          <div className="image-overlay"></div>
        </div>

        <div className="cause-content">
          <h3 className="cause-title">{item.title}</h3>
          <p className="cause-description">{item.description}</p>
        </div>
      </div>
    ));

  return (
    <section className="causes-section">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Our Work</span>
          </h2>
          <p className="section-description">
            Providing education, guidance, and community support to underprivileged children across Madurai.
          </p>
        </div>

        {/* TOGGLE BUTTON */}
        <div className="toggle-wrapper">
          <button
            className={`toggle-btn ${activeTab === "centers" ? "active" : ""}`}
            onClick={() => setActiveTab("centers")}
          >
            Study Centers
          </button>
          <button
            className={`toggle-btn ${activeTab === "programs" ? "active" : ""}`}
            onClick={() => setActiveTab("programs")}
          >
            Programs & Initiatives
          </button>
        </div>

        {/* CONTENT */}
        <div className="causes-grid">
          {activeTab === "centers"
            ? renderCards(centers)
            : renderCards(programs)}
        </div>

      </div>
    </section>
  );
};

export default Causes;
