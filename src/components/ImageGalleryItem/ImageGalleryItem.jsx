import React from 'react';
import "./ImageGalleryItem.modules.css"

export const ImageGalleryItem = ({
  imageLink,
  imageDescription,
  onClick,
  getAlt,
  getlargeImageURL,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        onClick();
        getAlt();
        getlargeImageURL();
      }}
    >
      <img
        className="ImageGalleryItem-image"
        src={imageLink}
        alt={imageDescription}
      />
    </li>
  );
};
