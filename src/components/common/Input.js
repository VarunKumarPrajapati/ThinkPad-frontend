import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Icon from "./Icon";

function Input({ password, className, onChange, ...rest }) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleClickPasswordBtn = (e) => {
    e.preventDefault();
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <>
      {password ? (
        <div className={twMerge("flex items-center w-full", className)}>
          <input
            onChange={onChange}
            type={isPasswordVisible ? "text" : "password"}
            className="w-full focus:outline-none bg-inherit"
            {...rest}
          />

          <Icon
            plain
            onClick={handleClickPasswordBtn}
            icon={isPasswordVisible ? FaEye : FaEyeSlash}
          />
        </div>
      ) : (
        <input
          className={twMerge("focus:outline-none bg-inherit w-full", className)}
          onChange={onChange}
          {...rest}
        />
      )}
    </>
  );
}

export default Input;
