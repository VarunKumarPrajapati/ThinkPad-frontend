import React from "react";
import MobileSidebarItem from "./MobileSidebarItem";
import { twMerge } from "tailwind-merge";

function MobileSidebar({ active, setActive, tabs }) {
  const renderNavigationPanel = tabs.map((tab, key) => {
    return (
      <MobileSidebarItem
        className={twMerge(
          active === tab.icon && "bg-active-icon-color",
          "pl-2 pr-2"
        )}
        tab={tab}
        setActive={setActive}
        key={key}
      />
    );
  });

  return (
    <aside className="absolute z-50 top-[65px] left-0 h-fit shadow-lg">
      <div className="flex flex-col items-start justify-center bg-white select-none font-poppins">
        {renderNavigationPanel}
      </div>
    </aside>
  );
}

export default MobileSidebar;
