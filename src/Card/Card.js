import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;