import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('Loading joke...');

  const fetchJoke = () =>
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(`${data.setup} — ${data.punchline}`))
      .catch(() => setJoke('Failed to fetch a joke'));

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default JokeFetcher;
