import React from "react";
import { MdLightbulbOutline, MdOutlineArchive } from "react-icons/md";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

import usePropsContext from "../hooks/use-propsContext";

function Sidebar() {
  const { isMobile, isSidebarExpanded } = usePropsContext();

  const tabs = [
    {
      icon: MdLightbulbOutline,
      name: "Notes",
    },
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
    {
      icon: MdOutlineArchive,
      name: "Archive",
    },
  ];

  return (
    <>
      {isMobile ? (
        isSidebarExpanded && <MobileSidebar tabs={tabs} />
      ) : (
        <DesktopSidebar tabs={tabs} />
      )}
    </>
  );
}

export default Sidebar;
