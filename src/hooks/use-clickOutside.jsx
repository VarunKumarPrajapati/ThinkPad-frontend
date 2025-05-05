import { useEffect } from "react";

export default function useClickOutside({ toggleRef, buttonRef, callback }) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        toggleRef.current &&
        !toggleRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      )
        callback();
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleRef, buttonRef, callback]);
}
