import { useRef } from "react";

export default function useDebounce() {
  const timer = useRef(null);
  const run = (fn, delay = 3000) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn();
    }, [delay]);
  };

  return run;
}
