import React from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, onChange, ...rest }) {
  return (
    <input
      className={twMerge("focus:outline-none bg-inherit w-full", className)}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Input;
