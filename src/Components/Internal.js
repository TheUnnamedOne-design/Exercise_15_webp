import React from 'react';

const StyledButton = () => {
  return (
    <>
      <style>
        {`
          .styled-button {
            background-color: red;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      <button className="styled-button">
        Click Me
      </button>
    </>
  );
};

export default StyledButton;
