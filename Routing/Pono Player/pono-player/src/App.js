import React from "react";
import "./styles.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Customers from "./components/Customers";
import Gallery from './components/Gallery';
import Home from "./components/Home";

import { Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </div>
  );
}
