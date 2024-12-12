import React from "react";

import ColorPalette from "../../Features/ColorPalette/ColorPalette";

function BackgroundToggle() {
  return (
    <div className="absolute z-10 top-12">
      <ColorPalette />
    </div>
  );
}

export default BackgroundToggle;
