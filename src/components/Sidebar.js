import React, { useState } from "react";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

import usePropsContext from "../hooks/use-propsContext";

function Sidebar() {
  const { isMobile, isSidebarExpanded } = usePropsContext();
  const [active, setActive] = useState("lightbulb_2");

  const tabs = [
    {
      icon: "lightbulb_2",
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
      icon: "archive",
      name: "Archive",
    },
  ];

  return (
    <>
      {isMobile ? (
        isSidebarExpanded && (
          <MobileSidebar tabs={tabs} active={active} setActive={setActive} />
        )
      ) : (
        <DesktopSidebar tabs={tabs} active={active} setActive={setActive} />
      )}
    </>
  );
}

export default Sidebar;
