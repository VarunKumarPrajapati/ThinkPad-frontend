import React from "react";
import { twMerge } from "tailwind-merge";
import { FaLightbulb } from "react-icons/fa";

import Icon from "./Icon";

function Logo({ className }) {
  return (
    <div
      className={twMerge(
        "cursor-pointer select-none !font-poppins group text-xl font-bold",
        className
      )}
    >
      <h1 className="flex items-baseline justify-center text-nowrap">
        <span className="text-orange-600">Think</span>

        <Icon
          plain
          size={30}
          icon={FaLightbulb}
          className="text-black transition-all duration-200 group-hover:text-yellow-300"
        />

        <span className="text-blue-600">Pad</span>
      </h1>
    </div>
  );
}

export default Logo;
