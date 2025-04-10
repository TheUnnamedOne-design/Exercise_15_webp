import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  return <h1>{darkMode ? ' Dark Mode' : ' Light Mode'}</h1>;
};

export default Header;
