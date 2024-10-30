import React from "react";
import GIcon from "./common/GIcon";
import { twMerge } from "tailwind-merge";
import usePropsContext from "../hooks/use-propsContext";

function MobileSidebarItem({ className, tab, setActive }) {
  const { setIsSidebarExpanded } = usePropsContext();
  const handleClick = () => {
    setActive(tab.icon);
    setIsSidebarExpanded(false);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "flex items-center justify-start cursor-pointer",
        "flex-row gap-x-3 w-56 rounded-e-full",
        className
      )}
    >
      <GIcon clickable outline>
        {tab.icon}
      </GIcon>
      <h4 className="text-sm">{tab.name}</h4>
    </div>
  );
}

export default MobileSidebarItem;
