import React from "react";
import { twMerge } from "tailwind-merge";

function GIcon({ children, icon, className, outline, clickable, ...rest }) {
  return (
    <button
      className={twMerge(
        outline ? "material-symbols-outlined" : "material-icons",
        "text-icon-color select-none",
        clickable && "p-3 mx-1 hover:bg-gray-200 rounded-full hover:text-black",
        className
      )}
      {...rest}
    >
      <span>{children || icon}</span>
    </button>
  );
}

export default GIcon;
