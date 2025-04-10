import React, { useRef } from 'react';

const InputFocusForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Focus Input Using useRef</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocusForm;
