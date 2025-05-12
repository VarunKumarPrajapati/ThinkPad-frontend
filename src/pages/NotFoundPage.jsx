import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
      <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
      <p className="mb-6 text-xl text-gray-700">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
}
