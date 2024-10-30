import React from "react";
import GIcon from "./common/GIcon";
import { twMerge } from "tailwind-merge";
import usePropsContext from "../hooks/use-propsContext";

function DesktopSidebarItem({ tab, active, setActive, className }) {
  const { isSidebarExpanded } = usePropsContext();

  return (
    <div
      onClick={() => setActive(tab.icon)}
      className={twMerge(
        "flex items-center justify-start pl-2 pr-2 cursor-pointer",
        isSidebarExpanded && "flex-row gap-x-3 w-56 rounded-e-full ",
        isSidebarExpanded && active === tab.icon && "bg-active-icon-color",
        isSidebarExpanded && !(active === tab.icon) && "hover:bg-gray-100",
        className
      )}
    >
      <GIcon
        className={twMerge(
          "hover:bg-active-icon-color",
          active === tab.icon && "bg-active-icon-color text-black"
        )}
        outline
      >
        {tab.icon}
      </GIcon>
      {isSidebarExpanded && <h4 className="text-sm">{tab.name}</h4>}
    </div>
  );
}

export default DesktopSidebarItem;
