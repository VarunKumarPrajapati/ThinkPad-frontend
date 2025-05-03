import { FaLightbulb } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function Loader({ loading }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-900 font-poppins">
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
