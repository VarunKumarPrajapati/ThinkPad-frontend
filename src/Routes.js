import { Route, Routes } from "react-router-dom";
import { PropsProvider } from "./context/propsContext";

import {
  MainPage,
  LoginPage,
  SignupPage,
  VerificationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProtectedRoute,
  Playground,
  NotFoundPage,
} from "./pages";

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
      <Route path="/playground" element={<Playground />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
