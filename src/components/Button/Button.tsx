import React from 'react';

const Button = ({ text, type }) => {
  const style = {
    sm: 'w-28 bg-bg-button-gr text-white py-1 rounded-full mx-1',
  };

  return <button className={`${style[type]}`}>{text}</button>;
};

export default Button;
