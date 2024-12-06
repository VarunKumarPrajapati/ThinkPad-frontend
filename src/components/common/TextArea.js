import React from "react";
import { twMerge } from "tailwind-merge";

function TextArea({ className, rows = 1, cols = 10, ...rest }) {
  return (
    <textarea
      {...rest}
      rows={rows}
      cols={cols}
      className={twMerge(
        "w-ful focus:outline-none placeholder:text-Icon-1 bg-inherit resize-none",
        className
      )}
    />
  );
}

export default TextArea;
