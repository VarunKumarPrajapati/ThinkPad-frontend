import React from "react";
import { twMerge } from "tailwind-merge";

import { MdOutlineCheck } from "react-icons/md";
import { MdOutlineFormatColorReset } from "react-icons/md";

function ColorPaletteItem({ active, color, onClick, className }) {
  const isActive = active === color.name;
  const isDefault = "Default" === color.name;
  const handleClick = () => {
    onClick(color.name);
  };

  return (
    <button className="relative m-0.5">
      {isActive && (
        <MdOutlineCheck className="absolute text-white rounded-full -right-0.5 -top-0.5 bg-violet-600" />
      )}
      <div
        title={color.name}
        style={{ backgroundColor: color.code }}
        className={twMerge(
          "size-12 md:size-8 rounded-full",
          "flex items-center justify-center",
          "transition-colors duration-200 border-2 border-transparent",
          "hover:border-black",
          isDefault && "border-gray-200",
          isActive && "hover:border-violet-600 !border-violet-600 ",
          className
        )}
        onClick={handleClick}
      >
        {isDefault && <MdOutlineFormatColorReset />}
      </div>
    </button>
  );
}

export default ColorPaletteItem;
