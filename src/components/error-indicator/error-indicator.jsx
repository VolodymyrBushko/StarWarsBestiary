import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img
        className="icon"
        src={icon}
        alt="error icon"
      />
      <h4 className="title">BOOM!</h4>
      <span className="content">Something has gone terribly wrong.</span>
    </div>
  );
}

export default ErrorIndicator;
