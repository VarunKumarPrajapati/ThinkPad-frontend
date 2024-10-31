import React from "react";
import { twMerge } from "tailwind-merge";
import { TbLoader2 } from "react-icons/tb";

function Loading({ className, size }) {
  return (
    <TbLoader2
      size={"24" || size}
      className={twMerge("animate-spin", className)}
    />
  );
}

export default Loading;
