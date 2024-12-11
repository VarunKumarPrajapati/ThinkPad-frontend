import React from "react";
import Icon from "./common/Icon";
import { twMerge } from "tailwind-merge";

import usePropsContext from "../hooks/use-propsContext";

function DesktopSidebarItem({ tab, className }) {
  const { isSidebarExpanded, active, setActive } = usePropsContext();

  return (
    <div
      onClick={() => setActive(tab.name)}
      className={twMerge(
        "flex items-center justify-start pl-2 pr-2 cursor-pointer",
        isSidebarExpanded && "flex-row gap-x-3 w-56 rounded-e-full ",
        isSidebarExpanded && active === tab.name && "bg-active-icon-color",
        isSidebarExpanded && !(active === tab.name) && "hover:bg-gray-100",
        className
      )}
    >
      <Icon
        icon={tab.icon}
        className={twMerge(
          "hover:bg-active-icon-color",
          active === tab.name && "bg-active-icon-color text-black"
        )}
      />

      {isSidebarExpanded && <h4 className="text-sm">{tab.name}</h4>}
    </div>
  );
}

export default DesktopSidebarItem;
