import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
