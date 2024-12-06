import { createContext, useState } from "react";

const propsContext = createContext();

function PropsProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);
  const props = {
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
