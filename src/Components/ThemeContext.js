import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const themeStyles = {
    backgroundColor: darkMode ? '#222' : '#f4f4f4',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    padding: '2rem',
    transition: 'all 0.3s ease'
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
