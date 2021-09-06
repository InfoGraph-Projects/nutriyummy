/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Internal Resources
import AuthProvider from "./context/authContext";
import "./index.css";

// Rendering the App
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
