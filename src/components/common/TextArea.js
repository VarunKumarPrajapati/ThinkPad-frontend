import React from "react";
import { twMerge } from "tailwind-merge";

function TextArea({
  className,
  rows = 1,
  cols = 10,
  onChange,
  value,
  ...rest
}) {
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={twMerge(
        "w-ful focus:outline-none placeholder:text-Icon-1 bg-inherit resize-none",
        "overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent ",
        className
      )}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}

export default TextArea;
