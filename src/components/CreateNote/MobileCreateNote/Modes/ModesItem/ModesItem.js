import React from "react";

import useCreateNoteContext from "../../../../../hooks/use-createNoteContext";

function ModesItem({ title, icon: Icon }) {
  const { setModeWorkspace } = useCreateNoteContext();

  const handleClick = () => {
    setModeWorkspace(title);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center p-4 text-[#011c37] bg-[#d3e4fe] rounded-full animate-bottomUp gap-x-1 w-fit shadow-2xl"
    >
      {title} <Icon size={24} />
    </div>
  );
}

export default ModesItem;
