import React from 'react';

interface ButtonProps {
  label: string; // Required text label for the button
  type?: 'primary' | 'secondary' | 'outline'; // Optional type for styling variations
  onClick?: () => void; // Optional callback function for handling clicks
}

const Button: React.FC<ButtonProps> = ({ label, type = 'primary', onClick }) => {
  const baseStyles = {
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonStyles = {
    primary: {
      backgroundColor: '#631280',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f4f4f4',
      color: '#333',
      border: '1px solid #ddd',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#631280',
      border: '1px solid #631280',
    },
  };

  return (
    <button
      style={{ ...baseStyles, ...buttonStyles[type] }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
