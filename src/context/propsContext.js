import { createContext, useState } from "react";

const propsContext = createContext();

function PropsProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLayoutGrid, setIsLayoutGrid] = useState(true);
  const [sidebarBtnRef, setSidebarBtnRef] = useState(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState({ query: null, color: null });
  const props = {
    isMobile,
    setIsMobile,
    isLayoutGrid,
    isSidebarExpanded,
    setIsLayoutGrid,
    setIsSidebarExpanded,
    sidebarBtnRef,
    setSidebarBtnRef,
    modalVisibility,
    setModalVisibility,
    selectedNote,
    setSelectedNote,
    search,
    setSearch,
  };

  return (
    <propsContext.Provider value={props}>{children}</propsContext.Provider>
  );
}

export default propsContext;
export { PropsProvider };
