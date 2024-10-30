import React from "react";
import DesktopSidebarItem from "./DesktopSidebarItem";

function DesktopSidebar({ tabs, active, setActive }) {
  const renderNavigationPanel = tabs.map((tab, key) => {
    return (
      <DesktopSidebarItem
        tab={tab}
        active={active}
        setActive={setActive}
        key={key}
      />
    );
  });

  return (
    <aside className="h-full w-fit">
      <div className="h-full pt-2">
        <div className="flex flex-col items-start justify-center select-none font-poppins">
          {renderNavigationPanel}
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
