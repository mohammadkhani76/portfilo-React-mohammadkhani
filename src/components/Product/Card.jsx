import React from "react";
import "./card.css";

function limitedChars(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const Card = ({ title, firstdescription, description }) => {
  return (
    <div className="card__container">
      <div className="card__details">
        <div className="card__product">
          <h2>{limitedChars(title, 15)}</h2>
          <p>{firstdescription}</p>
          <p>{limitedChars(description, 70)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
