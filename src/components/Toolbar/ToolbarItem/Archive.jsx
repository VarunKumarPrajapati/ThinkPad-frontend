import { useState } from "react";
import { Icon } from "../../common";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
export default function Archive({
  isArchive = false,
  size = 18,
  onClick,
  className,
}) {
  const [archive, setArchive] = useState(isArchive);

  const handleArchiveClick = (e) => {
    e.stopPropagation();
    setArchive(!archive);
    onClick({
      target: { name: "isArchive", value: !archive },
      message: `Note is ${!archive ? "archived" : "unarchive"}`,
    });
  };

  return (
    <Icon
      size={size}
      title={archive ? "Unarchive" : "Archive"}
      icon={archive ? MdOutlineUnarchive : MdOutlineArchive}
      onClick={handleArchiveClick}
      className={className}
    />
  );
}
