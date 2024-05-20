// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import App_state from "./context/App_state.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <App_state>
    <App />
  </App_state>
);
