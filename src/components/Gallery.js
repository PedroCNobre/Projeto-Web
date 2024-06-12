import React, { useState } from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
//import image3 from '../assets/image6.jpeg';
//import image3 from '../assets/image7.jpeg';

function Gallery() {
  const images = [image1, image2, image3,image4, image5];
  const [showGallery, setShowGallery] = useState(true);

  return (
    <div>
      <h1>Galeria</h1>
      <button onClick={() => setShowGallery(!showGallery)}>
        {showGallery ? 'Hide' : 'Show'} Gallery
      </button>
      {showGallery && (
        <div className="gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Game screenshot ${index + 1}`}></img>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
