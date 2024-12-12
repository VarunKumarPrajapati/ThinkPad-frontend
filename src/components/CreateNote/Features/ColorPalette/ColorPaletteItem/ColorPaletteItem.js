import React from "react";
import { twMerge } from "tailwind-merge";

import { MdOutlineCheck } from "react-icons/md";

function ColorPaletteItem({ children, active, color, onClick, className }) {
  return (
    <button className={twMerge("relative", "m-0.5 ")}>
      <div
        title={color.name}
        style={{ backgroundColor: color.code }}
        className={twMerge(
          "size-8 rounded-full",
          "flex items-center justify-center",
          "transition-colors duration-200",
          active === color.name
            ? "hover:border-violet-600 !border-violet-600 border-2"
            : "border-black hover:border-2",
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>

      {active === color.name && (
        <MdOutlineCheck className="absolute text-white rounded-full -right-0.5 -top-0.5 bg-violet-600" />
      )}
    </button>
  );
}

export default ColorPaletteItem;
