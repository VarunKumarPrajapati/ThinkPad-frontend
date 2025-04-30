import React from "react";
import { twMerge } from "tailwind-merge";

import Loading from "./Loading";

function Button({ children, loading, className, disabled, ...rest }) {
  return (
    <button
      className={twMerge(
        "w-fit border-2 flex items-center justify-center px-3 py-1 text-lg md:text-base rounded-lg text-white bg-black text-nowrap",
        (loading || disabled) && "!bg-gray-500 cursor-not-allowed",
        className
      )}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}

export default Button;
