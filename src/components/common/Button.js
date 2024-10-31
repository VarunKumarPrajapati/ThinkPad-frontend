import React from "react";
import { twMerge } from "tailwind-merge";

import Loading from "./Loading";

function Button({ children, loading, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "w-fit border-2 flex items-center justify-center px-3 py-2 rounded-lg text-white bg-black",
        loading && "bg-gray-500",
        className
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}

export default Button;
