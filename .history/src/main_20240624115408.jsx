import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import tailwindConfig from "../tailwind.config.js";
import Search from "./components/Search/Search.jsx";
import Preview from "./components/Preview/Preview.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
