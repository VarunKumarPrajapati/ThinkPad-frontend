import React from "react";
import { twMerge } from "tailwind-merge";

function Icon({ className, icon: Icon, size = 24 }) {
  return (
    <button
      className={twMerge(
        "p-3 rounded-full cursor-pointer hover:bg-slate-100 flex justify-center items-center",
        className
      )}
    >
      <Icon size={size} />
    </button>
  );
}

export default Icon;
