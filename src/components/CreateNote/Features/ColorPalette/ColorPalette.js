import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdOutlineFormatColorReset } from "react-icons/md";

import ColorPaletteItem from "./ColorPaletteItem/ColorPaletteItem";

import useCreateNoteContext from "../../../../hooks/use-createNoteContext";

function ColorPalette() {
  const { setNote, note, colors } = useCreateNoteContext();
  const [active, setActive] = useState(note.color || "Default");

  const handleChangeColor = (color) => {
    setActive(color.name);
    setNote({ ...note, color: color.name });
  };

  const renderColorsPalette = colors.map((color, key) => {
    return (
      <ColorPaletteItem
        key={key}
        color={color}
        active={active}
        onClick={() => handleChangeColor(color)}
        className={twMerge(
          color.name === "Default" && "border-2 border-gray-200"
        )}
      >
        {color.name === "Default" && <MdOutlineFormatColorReset />}
      </ColorPaletteItem>
    );
  });

  return (
    <div className="flex items-center w-full px-2 pt-2 pb-1 overflow-x-auto bg-white border rounded-lg">
      {renderColorsPalette}
    </div>
  );
}

export default ColorPalette;
