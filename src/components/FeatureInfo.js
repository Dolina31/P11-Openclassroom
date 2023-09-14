import React from "react";

const FeatureInfo = ({ image, title, description }) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={image} alt="" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureInfo;
