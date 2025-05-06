import { forwardRef, useState } from "react";

import { BaseToggle } from "../../ui";
import ColorPaletteItem from "./ColorPaletteItem/ColorPaletteItem";
import { twMerge } from "tailwind-merge";

const ColorPalette = forwardRef(
  ({ defaultColor = "Default", onClick, className }, ref) => {
    const [active, setActive] = useState(defaultColor);

    const handleClick = (color) => {
      setActive(color);
      onClick(color);
    };

    const renderColorsPalette = colors.map((color, key) => {
      const props = { color, active };
      return <ColorPaletteItem key={key} {...props} onClick={handleClick} />;
    });

    return (
      <BaseToggle
        ref={ref}
        className={twMerge(
          "flex items-center px-2 rounded-lg py-0.5 overflow-x-auto pb-1 mb:pb-0",
          className
        )}
      >
        {renderColorsPalette}
      </BaseToggle>
    );
  }
);
export default ColorPalette;

const colors = [
  { name: "Default", code: "rgb(255,255,255)" },
  { name: "Coral", code: "rgb(250,175,168)" },
  { name: "Peach", code: "rgb(243,159,118)" },
  { name: "Sand", code: "rgb(255,248,184)" },
  { name: "Mint", code: "rgb(226,246,211)" },
  { name: "Sage", code: "rgb(180,221,211)" },
  { name: "Fog", code: "rgb(212,228,237)" },
  { name: "Storm", code: "rgb(174,204,220)" },
  { name: "Duck", code: "rgb(211,191,219)" },
  { name: "Blossom", code: "rgb(246,226,221)" },
  { name: "Clay", code: "rgb(233,227,212)" },
  { name: "Chalk", code: "rgb(239,239,241)" },
];
