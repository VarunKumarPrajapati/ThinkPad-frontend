import React from "react";
import { Route, Routes } from "react-router-dom";
import { PropsProvider } from "./context/propsContext";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PropsProvider>
            <MainPage />
          </PropsProvider>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
