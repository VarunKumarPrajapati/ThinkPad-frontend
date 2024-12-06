import React from "react";

function MoreToggle() {
  return (
    <div className="absolute z-10 py-1 bg-white rounded-md top-8 left-28 shadow-1">
      <ul className="text-[0.8125rem] *:cursor-pointer *:text-nowrap font-poppins *:pl-4 *:pr-2 *:py-1 *:border text-gray-600 *:border-transparent w-full">
        {/* <li className="hover:bg-gray-100">Add label</li>   */}
        {/* <li className="hover:bg-gray-100">Add drawing</li> */}
        <li className="hover:bg-gray-100">Show checkboxes</li>
      </ul>
    </div>
  );
}

export default MoreToggle;
