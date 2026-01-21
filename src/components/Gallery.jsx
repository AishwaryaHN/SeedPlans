import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 2,
      title: "Volunteers in Action",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 3,
      title: "Saving Nature Together",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 4,
      title: "Green Awareness Program",
      img: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea"
    },
    {
      id: 5,
      title: "Community Plantation",
      img: "https://images.unsplash.com/photo-1492496913980-501348b61469"
    },
    {
      id: 6,
      title: "Protect Our Earth",
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
    }
  ];

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h2>Our Gallery</h2>
          <p>Moments from our environmental activities and green missions</p>
        </div>

        <div className="gallery-grid">
          {images.map(item => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img src={selectedImage.img} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
