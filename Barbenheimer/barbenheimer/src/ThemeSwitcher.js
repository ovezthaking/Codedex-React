// Import ThemeContext and useContext here 💖

export default function ThemeSwitcher() {
  // Consume theme and toggleTheme from ThemeContext here 💖

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Switch to {theme === "barbie" ? "Oppenheimer" : "Barbie"} Theme
      </button>
    </div>
  );
}
