import React, { useState } from 'react';

const Content = () => {

  const fetchJoke = () => {
    var par=document.getElementById("joke");
    par.textContent="Which side of the chicken has more feathers? The outside.";
  };

  return (
    <main>
      <button onClick={fetchJoke}>Get a Random Joke</button>
      <p id="joke"></p>
    </main>
  );
};

export default Content;
