import React from "react";
import "./card.css";

const Card = ({ title, firstdescription, description }) => {
  return (
    <div className="card__container">
      <div className="card__details">
        <div className="card__product">
          <h2>{title}</h2>
          <p>{firstdescription}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
