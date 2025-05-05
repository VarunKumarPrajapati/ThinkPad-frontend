import { useState, useRef, useEffect } from "react";
import useClickOutside from "./use-clickOutside";

export default function useToggle(initialState = false, buttonRef = null) {
  const [isOpen, setOpen] = useState(initialState);
  const toggleRef = useRef(null);

  useEffect(() => {
    setOpen(initialState);
  }, [initialState]);

  const toggle = () => setOpen((prev) => !prev);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  useClickOutside({ toggleRef, buttonRef, callback: close });

  return { isOpen, toggleRef, toggle, open, close };
}
