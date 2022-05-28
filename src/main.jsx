import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { GifProvider } from "./context/gifContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GifProvider>
    <App />
  </GifProvider>
);
