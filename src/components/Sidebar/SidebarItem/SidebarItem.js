import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import Icon from "../../common/Icon";

function SidebarItem({ label, icon, href, active, className }) {
  return (
    <Link to={href} className="w-full">
      <div
        className={twMerge(
          active ? "bg-active-icon-color" : "bg-white hover:bg-gray-100",
          "flex items-center pl-2.5 justify-left md:gap-x-5 rounded-e-full",
          className
        )}
      >
        <Icon icon={icon} className={"hover:bg-inherit"} />
        <div className="w-full text-sm font-medium truncate">{label}</div>
      </div>
    </Link>
  );
}

export default SidebarItem;
