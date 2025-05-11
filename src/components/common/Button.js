import { twMerge } from "tailwind-merge";

import Loading from "./Loading";

export default function Button({
  neutral,
  children,
  loading,
  className,
  disabled,
  ...rest
}) {
  return (
    <button
      className={twMerge(
        "w-fit border-2 flex items-center justify-center px-3 py-1 text-lg md:text-base rounded-lg text-white bg-black text-nowrap",
        neutral &&
          "text-black py-1.5 px-3 !text-sm transition-colors bg-transparent border-0 hover:bg-[#5f63680a]",
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
