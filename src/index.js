import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const root = document.getElementById("root");
const el = ReactDOM.createRoot(root);

el.render(
  <Provider store={store}>
    <App />
  </Provider>
);
