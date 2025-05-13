import { twMerge } from "tailwind-merge";
import { useToggle } from "../../hooks";
import { useEffect, useState } from "react";

export default function BaseToggle({ icon, children, className }) {
  const { isOpen, toggle, toggleRef, buttonRef } = useToggle(false);
  const [alignLeft, setAlignLeft] = useState(false);
  const [alignTop, setAlignTop] = useState(false);

  useEffect(() => {
    if (!isOpen || !buttonRef.current || !toggleRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const toggleRect = toggleRef.current.getBoundingClientRect();

    const sw = window.innerWidth;
    const sh = window.innerHeight;

    const spaceRight = sw - buttonRect.right;
    const spaceLeft = buttonRect.left;
    const spaceBottom = sh - buttonRect.bottom;
    const spaceTop = buttonRect.top;

    const needW = toggleRect.width;
    const needH = toggleRect.height;

    const shouldAlignLeft = spaceRight < needW && spaceLeft >= needW;
    const shouldAlignTop = spaceBottom < needH && spaceTop >= needH;

    setAlignLeft(shouldAlignLeft);
    setAlignTop(shouldAlignTop);
  }, [isOpen, buttonRef, toggleRef]);

  return (
    <span className="relative">
      <span ref={buttonRef} onClick={toggle}>
        {icon}
      </span>
      {isOpen && (
        <span
          onClick={(e) => e.stopPropagation()}
          ref={toggleRef}
          className={twMerge(
            "absolute shadow-1 bg-white z-50 rounded-lg",
            alignTop ? "bottom-full" : "top-full", // vertical positioning
            alignLeft ? "right-0" : "left-0", // horizontal positioning
            className
          )}
        >
          {children}
        </span>
      )}
    </span>
  );
}
