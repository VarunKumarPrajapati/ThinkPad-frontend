import React, { useEffect, useRef } from "react";

import { Logo } from "../../common";
import SidebarItem from "../SidebarItem/SidebarItem";

import usePropsContext from "../../../hooks/use-propsContext";

function MobileSidebar({ path }) {
  const sidebar = useRef(null);

  const { setIsSidebarExpanded, sidebarBtnRef } = usePropsContext();

  useEffect(() => {
    const handleSidebar = (e) => {
      if (
        sidebar.current &&
        !sidebar.current.contains(e.target) &&
        !sidebarBtnRef.current.contains(e.target)
      ) {
        setIsSidebarExpanded(false);
      }
    };

    document.addEventListener("click", handleSidebar);

    return () => {
      document.removeEventListener("click", handleSidebar);
    };
  }, [setIsSidebarExpanded, sidebarBtnRef]);

  return (
    <aside className="absolute inset-0 left-0 z-50 bg-black shadow-lg select-none bg-opacity-20 ">
      <div
        ref={sidebar}
        className="h-full px-2 bg-white w-72 min-w-64 rounded-e-3xl animate-slideIn"
      >
        <div className="py-3">
          <Logo />
        </div>
        <div className="flex flex-col items-start justify-center bg-white">
          {path.map((item) => (
            <SidebarItem key={item.label} className="rounded-full " {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default MobileSidebar;
