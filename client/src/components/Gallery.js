import React, { useState } from 'react';
import './Gallery.css'

const Gallery = () => {
  // Define an array of restaurant ambiance images
  const ambianceImages = [
    'https://thechurch.ie/wp-content/uploads/2017/09/The-Church-Gallery-Restaurant-1.jpg',
    'https://retaildesignblog.net/wp-content/uploads/2015/06/Chefs-Gallery-Restaurant-by-Giant-Design-Sydney-Australia-02.jpg',
    'https://cdn.lifestyleasia.com/wp-content/uploads/2018/10/13152704/Art-RESTAURANT-II1.jpg',
    'https://i.ytimg.com/vi/gA4GP2NHvZE/maxresdefault.jpg'
    // Add more image URLs here
  ];

  // Initialize the state with the first image as the initial displayed image
  const [currentImage, setCurrentImage] = useState(ambianceImages[0]);

  // Function to handle image click and update the current image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="gallery">
        <h2>Gallery</h2>
      <div className="gallery-images">
        {ambianceImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Restaurant Ambiance ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="current-image">
        <img src={currentImage} alt="Current Restaurant Ambiance" />
      </div>
    </div>
  );
};

export default Gallery;
