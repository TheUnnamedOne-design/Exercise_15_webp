import React from 'react';
import Child from './Child';

const Parent = () => {
  const parentMessage = "Hello from the Parent component!";

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Parent Component</h2>
      <Child message={parentMessage} />
    </div>
  );
};

export default Parent;
