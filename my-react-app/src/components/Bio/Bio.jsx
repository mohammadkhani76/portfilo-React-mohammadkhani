
import React from 'react';
import Title from "./Title";
import Image from "./Image";
import Button from "./Button";
import "./Bio.css";
const Bio = ({ title, bioimage, description }) => {
    return (
        <div className="bio-container">
            <div className="bio-title">
                <h1>{title}</h1>
                <p>{description}</p>
                <Button label="About Me" />
            </div>
            <div className="bio-image">
                <img src={bioimage} alt="Bio" />
            </div>
        </div>
    );
}

export default Bio;
