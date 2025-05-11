import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import Alert from "./Alert";

export default function Loader({ loading }) {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-900 font-poppins">
      <Alert isOpen={isOpen} onClose={() => setOpen(false)} duration={7000}>
        The backend is hosted on Render.com, so it may take a few moments to
        start. Thank you for your patience.
      </Alert>
      <div className="relative flex flex-col items-center">
        <div
          className={twMerge(
            "text-6xl transition-all duration-100",
            loading ? "text-yellow-300 animate-pulse" : "text-yellow-300"
          )}
        >
          <FaLightbulb size={90} />
        </div>

        {/* Glow effect */}
        {loading && (
          <div className="absolute bg-yellow-200 rounded-full size-9/12 opacity-20 blur-2xl animate-pulse" />
        )}

        <div className="mt-4 text-4xl font-semibold text-white">Loading</div>
      </div>
    </div>
  );
}
