import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...rest }) {
  return (
    <button className={twMerge("w-fit border-2 px-3 py-2 rounded-lg text-white bg-black", className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
