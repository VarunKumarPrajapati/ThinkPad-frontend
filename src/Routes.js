import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { PropsProvider } from "./context/propsContext";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import VerificationPage from "./pages/VerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
// import Playground from "./pages/Playground";

import { Loader } from "./components/ui";
import { useFetchUserQuery } from "./store";

function Router() {
  const navigate = useNavigate();
  const { isLoading, isError } = useFetchUserQuery();

  useEffect(() => {
    if (isError) navigate("/login");
  }, [isError, navigate]);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          isLoading ? (
            <Loader loading={isLoading} />
          ) : (
            <PropsProvider>
              <MainPage />
            </PropsProvider>
          )
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify-email" element={<VerificationPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      {/* <Route path="/playground" element={<Playground />} /> */}
    </Routes>
  );
}

export default Router;
