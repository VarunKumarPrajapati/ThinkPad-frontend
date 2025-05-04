import { Route, Routes } from "react-router-dom";
import { PropsProvider } from "./context/propsContext";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import VerificationPage from "./pages/VerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProtectedRoute from "./components/ProtectedRoute";
// import Playground from "./pages/Playground";

function Router() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <PropsProvider>
              <MainPage />
            </PropsProvider>
          </ProtectedRoute>
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
