import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Why Tree Plantation Matters",
    date: "August 12, 2024",
    author: "SeedPlan Team",
    desc: "Tree plantation helps balance the ecosystem, improves air quality, and supports biodiversity.",
    type: "image",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 2,
    title: "Climate Change Explained",
    date: "September 05, 2024",
    author: "Admin",
    desc: "Watch this short video explaining climate change and our responsibility.",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/EtW2rrLHs08"
  },
  {
    id: 3,
    title: "How Communities Can Go Green",
    date: "October 01, 2024",
    author: "SeedPlan",
    desc: "Community-driven green initiatives create long-term environmental impact.",
    type: "image",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
];

const Blog = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-header">
     
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              
              {/* Media */}
              <div className="blog-media">
                {blog.type === "image" ? (
                  <img
                    src={blog.img}
                    alt={blog.title}
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    src={blog.videoUrl}
                    title={blog.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Content */}
              <div className="blog-content">
                <span className="blog-meta">
                  {blog.date} · {blog.author}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <Link to={`/blog/${blog.id}`} className="blog-btn">
                  Read More
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
