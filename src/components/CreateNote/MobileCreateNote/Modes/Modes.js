import React from "react";
import { MdTextFields } from "react-icons/md";

import ModesItem from "./ModesItem/ModesItem";

function Modes() {
  const ModesList = [{ title: "Text", icon: MdTextFields }];

  return (
    <div className="flex flex-col items-end gap-y-2">
      {ModesList.map((Mode, key) => {
        return <ModesItem key={key} {...Mode} />;
      })}
    </div>
  );
}

export default Modes;
