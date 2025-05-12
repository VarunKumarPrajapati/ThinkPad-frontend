import React from "react";
import { useLocation } from "react-router-dom";
import { MdLightbulbOutline, MdOutlineArchive } from "react-icons/md";

import MobileSidebar from "./MobileSidebar/MobileSidebar";
import SidebarItem from "./SidebarItem/SidebarItem";

import usePropsContext from "../../hooks/use-propsContext";

function Sidebar({ children }) {
  const { pathname } = useLocation();
  const { isMobile, isSidebarExpanded } = usePropsContext();
  const path = [
    {
      label: "Notes",
      icon: MdLightbulbOutline,
      href: "/",
      active: pathname === "/" || pathname === "/search",
    },
    {
      label: "Archive",
      icon: MdOutlineArchive,
      href: "/archive",
      active: pathname === "/archive",
    },
    // Have to be add in future...
    // {
    //   icon: "notifications",
    //   name: "Reminders",
    // },
    // {
    //   icon: "label",
    //   name: "Label",
    // },
    // {
    //   icon: "edit",
    //   name: "Edit labels",
    // },
  ];

  return (
    <>
      <div className="relative flex flex-row w-full h-full overflow-hidden font-poppins">
        <aside className="flex-shrink-0 hidden w-64 pt-2 select-none md:block ">
          <div className="flex flex-col items-start justify-center w-full">
            {path.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </aside>

        <div className="flex-1 w-full h-full overflow-y-auto">{children}</div>
      </div>
      {isSidebarExpanded && isMobile && <MobileSidebar path={path} />}
    </>
  );
}

export default Sidebar;
