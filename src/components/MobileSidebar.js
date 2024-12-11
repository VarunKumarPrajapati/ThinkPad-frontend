import React from "react";
import { twMerge } from "tailwind-merge";

import MobileSidebarItem from "./MobileSidebarItem";

import usePropsContext from "../hooks/use-propsContext";

function MobileSidebar({ tabs }) {
  const { active } = usePropsContext();

  const renderNavigationPanel = tabs.map((tab, key) => {
    return (
      <MobileSidebarItem
        className={twMerge(
          active === tab.name && "bg-active-icon-color",
          "pl-2 pr-2"
        )}
        tab={tab}
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
