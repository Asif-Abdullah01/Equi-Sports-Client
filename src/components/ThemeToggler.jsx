import React, { useState, useEffect } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="p-2 border border-green-800 rounded-full "
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MdDarkMode className='text-black' /> : <CiLight className='text-black'  />}
    </button>
  );
};

export default ThemeToggler;