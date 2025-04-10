import React, { useRef, useState } from 'react';

const UserFormRef2 = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    setSubmittedData({ name, email });
  };

  return (
    <div style={{ margin: '2rem', textAlign: 'center' }}>
      <h2>User Form (useRef)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input type="text" ref={nameRef} placeholder="Enter Name" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="email" ref={emailRef} placeholder="Enter Email" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '2rem' }}>
          <h4>Submitted Data:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserFormRef2;
