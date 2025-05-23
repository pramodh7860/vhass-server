import React from 'react';
import { bgImage } from '../assets';

const BackgroundImage = ({ children, className = '' }) => {
  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage; 