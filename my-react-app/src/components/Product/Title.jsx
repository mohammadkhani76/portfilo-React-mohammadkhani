import React from 'react';
import './card.css';

const Card = ({ title, description }) => {
  return (
    <div className="about__container">
      <div className="about__details">
        <h2> {title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
