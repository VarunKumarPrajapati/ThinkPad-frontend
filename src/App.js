import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

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
        limit={2}
        className="text-sm px-4 py-2 max-w-[90vw] md:text-base md:px-6 md:py-3 md:max-w-full"
      />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
