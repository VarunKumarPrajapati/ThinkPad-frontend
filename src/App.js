import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

import {
  LoginPage,
  SignupPage,
  ForgotPasswordPage,
  VerificationPage,
  ResetPasswordPage,
  NotFoundPage,
  ArchiveNotePage,
  CommonNotePage,
  SearchNotePage,
} from "./pages";

import { AuthLayout, DashboardLayout } from "./components/layout";
import { PropsProvider } from "./context/propsContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<VerificationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
        </Route>

        {/* Protected Routes inside Layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PropsProvider>
                <DashboardLayout />
              </PropsProvider>
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<CommonNotePage />} />
          <Route path="/archive" element={<ArchiveNotePage />} />
          <Route path="/search" element={<SearchNotePage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Toast*/}

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
    </BrowserRouter>
  );
}

export default App;
