import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PropsProvider } from "./context/propsContext";

const root = document.getElementById("root");
const el = ReactDOM.createRoot(root);

el.render(
  <PropsProvider>
    <App />
  </PropsProvider>
);
