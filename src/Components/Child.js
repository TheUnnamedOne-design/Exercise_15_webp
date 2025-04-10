import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ message }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
      <h3>Message from Parent:</h3>
      <p>{message}</p>
    </div>
  );
};

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;
