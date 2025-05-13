import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Input({
  autoComplete,
  className,
  error,
  iconRight: IconRight,
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  name,
  onChange,
  placeholder,
  showToggle = false,
  type = "text",
  value,
  ...rest
}) {
  const [isVisible, setVisible] = useState(false);
  const inputType =
    showToggle && type === "password"
      ? isVisible
        ? "text"
        : "password"
      : type;

  return (
    <div className="flex flex-col items-start justify-center w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div
        className={twMerge(
          `flex items-center w-full px-2.5 md:py-1 py-2 bg-white rounded-md border-2 border-black focus-within:border-blue-500 
          focus-within:duration-200 focus-within:transition-colors`,
          error && "border-red-500",
          className
        )}
      >
        {LeftIcon && LeftIcon}
        <input
          autoComplete={autoComplete}
          className="flex-1 w-full bg-transparent focus:outline-none"
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={inputType}
          value={value}
          {...rest}
        />
        {RightIcon && RightIcon}

        {showToggle && type === "password" && (
          <button
            type="button"
            className="focus-visible:outline-none"
            onClick={() => setVisible((prev) => !prev)}
          >
            {isVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
