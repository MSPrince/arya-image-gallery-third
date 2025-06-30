import React from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = Array.from({ length: 1136 }, (_, i) => ({ 
  src: `/images/(${2651 + i}).jpg`, 
  alt: `${2651 + i}`, 
}));


export function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="gallery-container">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
        elementClassNames="custom-gallery"
      >
        {images.map((image, index) => (
          <a href={image.src} key={index} className="gallery-item">
            <img
              alt={image.alt}
              src={image.src}
              className="gallery-img"
            />
          </a>
        ))}
      </LightGallery>

      <style>{`
        :root {
          --bg-light: #f9f9fb;
          --bg-dark: #1e1e2f;
          --text-light: #222;
          --text-dark: #f9f9f9;
          --card-light: #ffffff;
          --card-dark: #2c2f3f;
          --shadow-light: rgba(0, 0, 0, 0.08);
          --shadow-dark: rgba(255, 255, 255, 0.06);
        }

        body.light {
          background-color: var(--bg-light);
          color: var(--text-light);
        }

        body.dark {
          background-color: var(--bg-dark);
          color: var(--text-dark);
        }

        .gallery-container {
          max-width: 1300px;
          margin: 40px auto;
          padding: 24px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .custom-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
          gap: 20px;
         
        }

        .gallery-item {
          background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));
          backdrop-filter: blur(12px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px var(--shadow-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
         
        }

        body.dark .gallery-item {
          background-color: var(--card-dark);
          box-shadow: 0 8px 24px var(--shadow-dark);
        }

        .gallery-item:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          border-radius: 12px;
           filter: brightness(.8);
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
      `}</style>
    </div>
  );
}
