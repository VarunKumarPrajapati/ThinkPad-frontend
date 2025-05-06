import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import BaseToggle from "../ui/BaseToggle";

const SettingToggle = forwardRef((props, ref) => {
  const list = [
    {
      href: "https://www.linkedin.com/in/varunkumarprajapati",
      name: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/VarunKumarPrajapati",
      name: "GitHub",
      icon: FaGithub,
    },
  ];

  const renderList = list.map((item) => {
    return (
      <li className="py-1 pl-4 pr-2 cursor-pointer hover:bg-gray-200">
        <Link to={item.href} className="flex items-center gap-x-2">
          {<item.icon size="16" />}
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <BaseToggle ref={ref} className="block w-32 py-2 rounded -left-2 h-fit">
      <span>
        <ul className="text-sm">{renderList}</ul>
      </span>
    </BaseToggle>
  );
});

export default SettingToggle;
