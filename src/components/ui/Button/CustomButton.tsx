import React from 'react';

type ButtonProps = {
  textColor: string;
  bgColor: string;
  text: string;
  border: string
};

const CustomButton: React.FC<ButtonProps> = ({ textColor, bgColor, text, border }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '10px 20px',
    border: border,
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
