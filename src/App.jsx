
import React from 'react';
import RecipeSlider from './RecipeSlider';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from './ThemeContext';
import './styles.css'; // Make sure to import your CSS file

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <RecipeSlider />
      </div>
    </ThemeProvider>
  );
};

export default App;