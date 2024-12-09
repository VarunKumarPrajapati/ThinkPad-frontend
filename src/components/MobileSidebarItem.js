import React from "react";
import Icon from "./common/Icon";
import { twMerge } from "tailwind-merge";
import usePropsContext from "../hooks/use-propsContext";

function MobileSidebarItem({ className, tab, setActive }) {
  const { setIsSidebarExpanded } = usePropsContext();
  const handleClick = () => {
    setActive(tab.name);
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
      <Icon icon={tab.icon} />

      <h4 className="text-sm">{tab.name}</h4>
    </div>
  );
}

export default MobileSidebarItem;
