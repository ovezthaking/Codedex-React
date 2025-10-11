import { React, useState } from "react";
// Import createContext 💖
import {createContext} from 'react';
// Import Home and ThemeSwitcher here 💖
import Home from "./Home";
import ThemeSwitcher from "./ThemeSwitcher";

import "./styles.css";

// Create a ThemeContext here 💖
export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("barbie");

  // Toggle theme function
  function toggleTheme() {
    setTheme(function (prevTheme) {
      return prevTheme === "barbie" ? "oppenheimer" : "barbie";
    });
  }

  return <>{/* Use ThemeContext.Provider here 💖 */}</>;
}
