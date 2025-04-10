import React from 'react';

const StyledButton = () => {
  const buttonStyle = {
    backgroundColor: 'green',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle}>
      Click Me
    </button>
  );
};

export default StyledButton;
