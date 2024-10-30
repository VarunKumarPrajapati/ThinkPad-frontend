import React from "react";
import { twMerge } from "tailwind-merge";

function Logo({ className }) {
  return (
    <div
      className={twMerge(
        "cursor-pointer select-none !font-poppins group w-[145px]",
        className
      )}
    >
      <h1 className="flex items-baseline justify-center text-xl font-bold text-nowrap">
        <span className="text-orange-600">Think</span>
        <span className="text-black transition-all duration-200 material-symbols-outlined group-hover:text-3xl group-hover:text-yellow-300">
          emoji_objects
        </span>

        <span className="text-blue-600">Pad</span>
      </h1>
    </div>
  );
}

export default Logo;
