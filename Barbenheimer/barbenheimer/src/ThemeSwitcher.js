// Import ThemeContext and useContext here 💖
import { ThemeContext } from "./App";
import { useContext } from "react";

export default function ThemeSwitcher() {
  // Consume theme and toggleTheme from ThemeContext here 💖
  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Switch to {theme === "barbie" ? "Oppenheimer" : "Barbie"} Theme
      </button>
    </div>
  );
}
