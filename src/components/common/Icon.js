import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Icon = forwardRef(
  ({ plain, className, icon: Icon, size = 24, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "flex justify-center items-center",
          "text-icon-color",
          plain
            ? ""
            : "p-3 mx-1 rounded-full transition-colors duration-150 hover:text-black hover:bg-[rgba(95,99,104,0.157)]",
          className
        )}
        {...rest}
      >
        <Icon size={size} />
      </button>
    );
  }
);

export default Icon;
