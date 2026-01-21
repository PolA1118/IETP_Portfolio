import { useState } from "react";
import "./Gallery.css";


/* ===== IMAGES ===== */
const images = [
  "/images/img 1.jpg",
  "/images/img 7.jpg",
  "/images/img 2.jpg",
  "/images/img 8.jpg",
  "/images/img 3.jpg",
  "/images/img 4.jpg",
  "/images/img 5.jpg",
  "/images/img 6.jpg",
];

/* ===== VIDEOS ===== */
const videos = [
  "/videos/vid 1.mp4",
  "/videos/vid 2.mp4",
  "/videos/vid 3.mp4",
];

function ImageGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* GRID VIEW */}
      <div className="media-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="grid-item"
            onClick={() => setSelected(i)}
          />
        ))}
      </div>

      {/* MODAL VIEWER */}
      {selected !== null && (
        <div className="viewer-overlay">
          <button className="close-btn" onClick={() => setSelected(null)}>
            ✖
          </button>

          <button
            className="nav-btn left"
            onClick={() =>
              setSelected((prev) => (prev - 1 + images.length) % images.length)
            }
          >
            ⬅
          </button>

          <img src={images[selected]} className="viewer-media" />

          <button
            className="nav-btn right"
            onClick={() =>
              setSelected((prev) => (prev + 1) % images.length)
            }
          >
            ➡
          </button>
        </div>
      )}
    </div>
  );
}

function VideoGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* GRID */}
      <div className="media-grid">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="grid-item video-thumb"
            onClick={() => setSelected(i)}
          >
            ▶ Video {i + 1}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected !== null && (
        <div className="viewer-overlay">
          <button className="close-btn" onClick={() => setSelected(null)}>
            ✖
          </button>

          <button
            className="nav-btn left"
            onClick={() =>
              setSelected((prev) => (prev - 1 + videos.length) % videos.length)
            }
          >
            ⬅
          </button>

          <video
            key={selected}
            src={videos[selected]}
            controls
            className="viewer-media"
          />

          <button
            className="nav-btn right"
            onClick={() =>
              setSelected((prev) => (prev + 1) % videos.length)
            }
          >
            ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="page">
      <h1>Gallery</h1>

      <section>
        <h2>Images</h2>
        <ImageGallery />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Videos</h2>
        <VideoGallery />
      </section>
    </div>
  );
}
