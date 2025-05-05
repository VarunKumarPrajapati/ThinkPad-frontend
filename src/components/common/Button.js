import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import Loading from "./Loading";

const Button = forwardRef(
  ({ children, loading, className, disabled, ...rest }, ref) => {
    return (
      <button
        className={twMerge(
          "w-fit border-2 flex items-center justify-center px-3 py-1 text-lg md:text-base rounded-lg text-white bg-black text-nowrap",
          (loading || disabled) && "!bg-gray-500 cursor-not-allowed",
          className
        )}
        disabled={loading || disabled}
        ref={ref}
        {...rest}
      >
        {loading ? <Loading /> : children}
      </button>
    );
  }
);

export default Button;
