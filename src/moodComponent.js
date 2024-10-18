import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './moodComponentStyle.css'

const DarkModeToggle = () => {
  const initialMode = localStorage.getItem('theme') === 'dark';

  const [darkMode, setDarkMode] = useState(initialMode);

  useEffect(() => {
    const bodyElement = document.body;
    if (darkMode) {
      bodyElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
        }}
      >
        {darkMode ? <FaSun style={{ color: 'yellow' }} /> : <FaMoon style={{ color: 'gray' }} />}
      </button>
    </div>
  );
};

export default DarkModeToggle;


