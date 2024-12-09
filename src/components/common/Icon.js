import React from "react";
import { twMerge } from "tailwind-merge";

export default function Icon({
  plain,
  className,
  icon: Icon,
  size = 24,
  ...rest
}) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center",
        plain
          ? ""
          : "p-3 rounded-full transition-colors duration-150 hover:text-black hover:bg-[rgba(95,99,104,0.157)]",
        className
      )}
      {...rest}
    >
      <Icon size={size} />
    </button>
  );
}
