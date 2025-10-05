import React from "react";
import { useState } from "react";


import "./styles.css";

export default function App() {
  const [click, setClick] = useState(0);
  function increment(){
    setClick(function(prevClicks){
      return prevClicks + 1
    });
  }

  return (
    <div id="cookie">
      <p>{click} Cookies</p>
      <img
        onClick={increment}
        src={"https://i.imgur.com/VMWZ9bM.png"}
        alt="Chocolate chip cookie"
        width={100}
      />
    </div>
  );
}
