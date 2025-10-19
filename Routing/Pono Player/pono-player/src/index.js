import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
// Add import here 💖

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* Add BrowserRouter import here 💖 */}
    <App />
  </StrictMode>,
);
