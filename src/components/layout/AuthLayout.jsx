import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="w-screen h-screen !font-poppins">
      <Outlet />
    </main>
  );
}
