import { createContext, useState } from "react";

const propsContext = createContext();

function PropsProvider({ children }) {
  const [active, setActive] = useState("Notes");
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);

  const props = {
    active,
    setActive,
    isMobile,
    setIsMobile,
    isLayoutGrid,
    isSidebarExpanded,
    setIsLayoutGrid,
    setIsSidebarExpanded,
  };

  return (
    <propsContext.Provider value={props}>{children}</propsContext.Provider>
  );
}

export default propsContext;
export { PropsProvider };
