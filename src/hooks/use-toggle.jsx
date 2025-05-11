import { useState, useRef, useEffect } from "react";
import useClickOutside from "./use-clickOutside";

export default function useToggle(initialState = false) {
  const [isOpen, setOpen] = useState(initialState);
  const toggleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setOpen(initialState);
  }, [initialState]);

  const toggle = () => setOpen((prev) => !prev);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  useClickOutside({ toggleRef, buttonRef, callback: close });

  return { isOpen, toggleRef, buttonRef, toggle, open, close };
}
