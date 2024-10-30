import React from "react";
import { twMerge } from "tailwind-merge";

function GIcon({ children, icon, className, outline, ...rest }) {
  return (
    <button
      className={twMerge(
        outline ? "material-symbols-outlined" : "material-icons",
        "rounded-full p-3 mx-1 hover:bg-gray-200",
        "text-icon-color",
        className
      )}
      {...rest}
    >
      <span>{children || icon}</span>
    </button>
  );
}

export default GIcon;
