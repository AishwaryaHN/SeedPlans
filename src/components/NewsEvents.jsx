import React from "react";
import "./NewsEvents.css";

const NewsEvents = () => {
  return (
    <section className="news-events">
      <div className="container news-events-grid">

        {/* NEWS */}
        <div className="news-section">
          <h2 className="section-title">News</h2>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://img1.wsimg.com/isteam/ip/5276e802-4936-4f26-90d6-9f9037fd5ed4/SeedStudentsDancing.jpg/:/rs=w:600,h:400"
                alt="Seed Plan students commemorating Prof. Ted Adams"
              />
            </div>

            <div className="news-content">
              <span className="news-date">December 2025</span>
              <h3>11th Anniversary of Prof Ted Adams</h3>
              <p>
                Commemorating the 11th anniversary of our founder Prof. Ted Adams leaving us. 
                His legacy of education and empowerment continues to inspire students and 
                volunteers across all our centers in Madurai ...
              </p>
            </div>
          </div>
        </div>

        {/* EVENTS */}
        <div className="events-section">
          <h2 className="section-title">Events</h2>

          <div className="event-card">
            <div className="event-date">
              <h3>15</h3>
              <span>January</span>
            </div>
            <div className="event-content">
              <h4>Pongal Celebration Activities - Art from Waste</h4>
              <p>4:00 pm to 7:00 pm</p>
              <p>Karumbalai Center, Madurai</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <h3>20</h3>
              <span>January</span>
            </div>
            <div className="event-content">
              <h4>Parent-Teacher Meeting & Progress Review</h4>
              <p>6:00 pm to 8:00 pm</p>
              <p>All Centers, Madurai</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <h3>25</h3>
              <span>January</span>
            </div>
            <div className="event-content">
              <h4>Republic Day Cultural Program</h4>
              <p>5:00 pm to 8:00 pm</p>
              <p>Thathaneri Center, Madurai</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <h3>30</h3>
              <span>January</span>
            </div>
            <div className="event-content">
              <h4>Monthly Volunteer Training Session</h4>
              <p>10:00 am to 1:00 pm</p>
              <p>Alwarpuram Center, Madurai</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsEvents;