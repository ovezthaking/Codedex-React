import React from "react";
import {useState, useEffect} from 'react';
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState('#fffff');

  useEffect(function () {
    if (toggle){
      const intervalId = setInterval(function() {
      setColor(function(color) {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = color;
      });
    }, 2000);

      
        return function() {
          clearInterval(intervalId);
        };
      }
  }, [toggle]);

  const handleToggle = function () {
    setToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  return (
    <div id="toggle">
      <button onClick={handleToggle}>
        {toggle ? "Stop" : "Start"} Color Changing
      </button>
    </div>
  );
}
