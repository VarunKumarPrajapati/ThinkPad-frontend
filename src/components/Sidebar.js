import React, { useEffect, useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import usePropsContext from "../hooks/use-propsContext";

function Sidebar() {
  const { isSidebarExpanded } = usePropsContext();
  const [active, setActive] = useState("lightbulb_2");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tabs = [
    {
      icon: "lightbulb_2",
      name: "Notes",
    },
    {
      icon: "notifications",
      name: "Reminders",
    },
    {
      icon: "label",
      name: "Label",
    },
    {
      icon: "edit",
      name: "Edit labels",
    },
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
