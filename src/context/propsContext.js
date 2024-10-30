import { createContext, useState } from "react";

const propsContext = createContext();

function PropsProvider({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);

  const props = {
    isSidebarExpanded,
    setIsSidebarExpanded,
    isLayoutGrid,
    setIsLayoutGrid,
  };

  return (
    <propsContext.Provider value={props}>{children}</propsContext.Provider>
  );
}

export default propsContext;
export { PropsProvider };
