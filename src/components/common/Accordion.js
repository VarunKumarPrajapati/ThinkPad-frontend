import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { twMerge } from "tailwind-merge";

function Accordion({ isFocused, isError, header, children }) {
  const [isExpand, setExpand] = useState(true);

  useEffect(() => {}, [isFocused, isError]);

  return (
    <div className="relative">
      <div
        className={twMerge(
          " flex items-center justify-between pb-1 border-b border-gray-300 cursor-pointer",
          isError && "border-red-500 border-b-2",
          isFocused && "border-b-2"
        )}
        onClick={() => setExpand(!isExpand)}
      >
        <div className="w-full">{header}</div>
        <MdOutlineArrowDropDown size="18" className="float-right" />
      </div>
      {isExpand && children}
    </div>
  );
}

export default Accordion;
