import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PropsProvider } from "./context/propsContext";
import { Provider } from "react-redux";
import { store } from "./store";

const root = document.getElementById("root");
const el = ReactDOM.createRoot(root);

el.render(
  <Provider store={store}>
    <PropsProvider>
      <App />
    </PropsProvider>
  </Provider>
);
