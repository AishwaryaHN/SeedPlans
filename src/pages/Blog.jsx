import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Tree Plantation Matters",
      date: "August 12, 2024",
      author: "SeedPlan Team",
      desc: "Tree plantation helps balance the ecosystem, improves air quality, and supports biodiversity for future generations.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 2,
      title: "Climate Change & Our Responsibility",
      date: "September 05, 2024",
      author: "Admin",
      desc: "Climate change is a global challenge. Small steps like reducing waste and planting trees can make a big difference.",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 3,
      title: "How Communities Can Go Green",
      date: "October 01, 2024",
      author: "SeedPlan",
      desc: "Community-driven green initiatives create long-term environmental impact and awareness among people.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    }
  ];

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h2>Our Blog</h2>
          <p>Latest news & environmental insights</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="blog-content">
                <span className="blog-meta">
                  {blog.date} · {blog.author}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <Link to={`/blog/${blog.id}`} className="blog-btn">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
