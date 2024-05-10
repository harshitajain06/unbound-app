// import { Input } from "postcss";
// import React from "react";
import React, { useState } from "react";

const TextBox = ({ type, value, onChange }) => {
  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const textBoxStyle = {
    padding: '8px',
    fontSize: '15px',
    border: `3px solid ${isHovered || isFocused ? '#10b981' : '#27272a'}`,
    borderRadius: '20px',
    color: '#fef08a',
    backgroundColor: '#1c1917', // Replace with your desired neutral 950 color
    outline: 'none',
    transition: 'border-color 0.3s ease', // Smooth transition for border color
    width: '100%', // Set width to 100% for mobile compatibility
    maxWidth: '500px', // Limit maximum width for larger screens
    boxSizing: 'border-box' // Ensure padding and border are included in width calculation
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      style={textBoxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TextBox;