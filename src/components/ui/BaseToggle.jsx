import { forwardRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useToggle } from "../../hooks";

const BaseToggle = forwardRef(({ children, className }, ref) => {
  const { isOpen, toggleRef, toggle } = useToggle(false, ref);

  useEffect(() => {
    const btnRef = ref?.current;

    if (btnRef) {
      btnRef.addEventListener("click", toggle);
      return () => btnRef.removeEventListener("click", toggle);
    }
  }, [ref, toggle]);

  return (
    <>
      {isOpen && (
        <span
          ref={toggleRef}
          className={twMerge("absolute shadow-1 bg-white z-50", className)}
        >
          {children}
        </span>
      )}
    </>
  );
});

export default BaseToggle;
