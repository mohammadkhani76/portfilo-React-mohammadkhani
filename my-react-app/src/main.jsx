import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/Header/Header.css";
import "./components/Bio/Bio.css";
import "./components/Business/About.css";
import "./components/Product/card.css"



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
