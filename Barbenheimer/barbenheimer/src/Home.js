// Import ThemeContext and useContext here 💖
import { useEffect } from "react";

export default function Home() {
  // Use the useContext hook to consume the ThemeContext here 💖

  useEffect(
    function () {
      document.body.className = theme;
    },
    [theme],
  );

  return (
    <div className="content">
      <h1>{theme === "barbie" ? "💇🏼‍♀️💅🏻💗" : "🕵🏼‍♂️🌇🎥"}</h1>
      <p>
        {theme === "barbie"
          ? "I'm a barbie girl, in a barbie world!"
          : "Now I am become Death, the destroyer of worlds."}
      </p>
    </div>
  );
}
