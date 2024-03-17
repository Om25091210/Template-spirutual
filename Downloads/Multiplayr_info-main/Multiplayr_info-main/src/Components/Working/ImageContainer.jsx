import React from "react";

function ImageContainer({ src, title, description }) {
  return (
    <>
      <div className="imageContainer">
        <img src={src} alt="Working-img" className="image" />

        <div className="image_description">
          <span className="image_title">{title}</span>
          <p className="image_about">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ImageContainer;
