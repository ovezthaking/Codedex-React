import { React, useState } from "react";
// Import createContext 💖
// Import Home and ThemeSwitcher here 💖
import "./styles.css";

// Create a ThemeContext here 💖

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
