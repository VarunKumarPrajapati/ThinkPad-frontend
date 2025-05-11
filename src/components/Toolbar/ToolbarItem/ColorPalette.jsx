import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  MdOutlinePalette,
  MdOutlineFormatColorReset,
  MdOutlineCheck,
} from "react-icons/md";

import { BaseToggle } from "../../ui";
import { Icon } from "../../common";

export default function ColorPalette({
  className,
  onClick,
  active = "Default",
  size = "18",
}) {
  const [activeColor, setActiveColor] = useState(active);

  const handleClick = (color) => {
    setActiveColor(color.name);
    onClick({
      target: { name: "color", value: color.name },
      message: `Note background set to ${color.name.toLowerCase()}`,
    });
  };

  const renderColorsPalette = colors.map((color, key) => {
    const props = { color, active: activeColor };
    return (
      <ColorPaletteItem
        key={key}
        {...props}
        onClick={() => handleClick(color)}
      />
    );
  });
  return (
    <BaseToggle
      icon={<Icon icon={MdOutlinePalette} size={size} />}
      className={`flex items-center px-2 py-0.5 overflow-x-auto w-80 md:w-fit  pb-1 mb:pb-0 ${className}`}
    >
      {renderColorsPalette}
    </BaseToggle>
  );
}

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

function ColorPaletteItem({ active, color, className, ...rest }) {
  const isActive = active === color.name;
  const isDefault = "Default" === color.name;

  return (
    <button className="relative m-0.5">
      {isActive && (
        <MdOutlineCheck className="absolute text-white rounded-full -right-0.5 -top-0.5 bg-violet-600" />
      )}
      <div
        title={color.name}
        style={{ backgroundColor: color.code }}
        className={twMerge(
          "size-12 md:size-8 rounded-full",
          "flex items-center justify-center",
          "transition-colors duration-200 border-2 border-transparent",
          "hover:border-black",
          isDefault && "border-gray-200",
          isActive && "hover:border-violet-600 !border-violet-600 ",
          className
        )}
        {...rest}
      >
        {isDefault && <MdOutlineFormatColorReset />}
      </div>
    </button>
  );
}
