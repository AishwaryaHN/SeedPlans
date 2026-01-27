import React from "react";
import "./VolunteerForm.css";

const VolunteerForm = () => {
  return (
    <section className="volunteer-form">
      <div className="container">
        <h2>Become a Volunteer 🌱</h2>
        <p>Fill the form and join our green mission</p>

        <form className="form-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="City" />

          <textarea placeholder="Why do you want to volunteer?" rows="4" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
