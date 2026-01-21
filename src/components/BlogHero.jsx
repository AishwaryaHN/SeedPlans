import React from "react";
import { Link } from "react-router-dom";
import "./BlogHero.css";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="blog-hero-overlay"></div>

      <div className="blog-hero-content">
        <h1>Blog</h1>
      </div>

      <div className="blog-breadcrumb-bar">
        <div className="container">
          <nav className="blog-breadcrumb">
            <Link to="/" className="breadcrumb-home">🏠</Link>
            <span>Home</span>
            <span className="breadcrumb-sep">›</span>
            <span className="active">Blog</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
