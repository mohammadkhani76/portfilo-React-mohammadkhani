import React from 'react';

const Button = ({ label }) => {
    return (
        <a href="#">
            <button className="bio-button">
                {label}
            </button>
        </a>
    );
}

export default Button;