import React, { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "./blogData";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();   
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) {
    return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;
  }

  return (
    <section className="blog-details">
      <div className="container">
        <h1>{blog.title}</h1>

        <div className="blog-info">
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <div className="blog-banner-wrapper">
          {blog.type === "video" ? (
            <iframe
              src={blog.videoUrl}
              title={blog.title}
              loading="lazy"
              allowFullScreen
            />
          ) : (
            <img
              src={blog.img}
              alt={blog.title}
              loading="lazy"
              className="blog-banner"
            />
          )}
        </div>

        <p>{blog.content}</p>

        {blog.points?.length > 0 && (
          <>
            <h2>Key Points</h2>
            <ul>
              {blog.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </>
        )}

        <div className="blog-cta">
          <h3>Join Our Green Mission 🌱</h3>
          <p>Be a part of our environmental protection movement.</p>

          
          <button onClick={() => navigate("/volunteer-form")}>
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogDetails);
