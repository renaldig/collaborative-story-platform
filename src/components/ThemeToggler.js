import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from 'braid-design-system';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} theme
    </Button>
  );
};

export default ThemeToggler;

