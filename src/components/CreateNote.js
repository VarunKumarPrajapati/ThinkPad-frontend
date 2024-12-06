import React from "react";

import DesktopCreateNote from "./DesktopCreateNote";
import MobileCreateNote from "./MobileCreateNote";

import usePropsContext from "../hooks/use-propsContext";

function CreateNote() {
  const { isMobile } = usePropsContext();
  return (
    <>
      {isMobile ? (
        <MobileCreateNote />
      ) : (
        <div className="flex justify-center">
          <DesktopCreateNote />
        </div>
      )}
    </>
  );
}

export default CreateNote;
