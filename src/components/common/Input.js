import React from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, ...rest }) {
  return (
    <input
      className={twMerge("focus:outline-none bg-inherit w-full", className)}
      {...rest}
    />
  );
}

export default Input;
