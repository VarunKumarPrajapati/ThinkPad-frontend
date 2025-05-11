import React from "react";
import { twMerge } from "tailwind-merge";
import { MdClose } from "react-icons/md";

export default function Alert({
  children,
  className,
  isOpen = false,
  onClose = () => {},
  duration = 0,
}) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match this duration with your slide-out animation duration
  }, [onClose]);

  React.useEffect(() => {
    if (!isOpen) return;

    if (duration) {
      const timer = setTimeout(() => handleClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration, isOpen, handleClose]);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={twMerge(
        "absolute flex justify-center top-8 md:text-lg",
        isClosing ? "animate-slide-out-top" : "animate-slide-in-top",
        "w-11/12 md:w-6/12 px-4 py-3 font-medium bg-red-600 rounded-md text-white",
        className
      )}
    >
      {children}
      <MdClose
        className="p-0.5 bg-white hover:bg-gray-200 rounded-full cursor-pointer flex-shrink-0 text-black size-6"
        onClick={handleClose}
      />
    </div>
  );
}
