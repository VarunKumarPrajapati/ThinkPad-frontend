import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import {
  // MdOutlineImage,
  // MdOutlineAddAlert,
  // MdOutlinePersonAddAlt,
  MdOutlineArchive,
  MdOutlineMoreVert,
  MdOutlinePalette,
} from "react-icons/md";

import Icon from "./Icon";

function Note({ note }) {
  const [isToggleOpen, setToggleOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const toggleRef = useRef(null);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleToggle = () => {
    setToggleOpen(!isToggleOpen);
    setIsHover(true);
  };

  const colors = [
    { name: "Default", code: "white" },
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

  useEffect(() => {
    const handleCloseToggle = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setToggleOpen(false);
        setIsHover(false);
      }
    };

    document.addEventListener("click", handleCloseToggle);

    return () => document.removeEventListener("click", handleCloseToggle);
  }, []);

  return (
    <div
      draggable
      style={{
        backgroundColor: colors.find((color) => color.name === note.color).code,
      }}
      ref={toggleRef}
      className={twMerge(
        "note m-4 select-none relative cursor-pointer border border-gray-300 rounded-lg min-w-60 w-60 max-w-60 h-fit",
        "flex flex-col items-center justify-between transition-colors duration-200",
        isHover && "shadow-1"
      )}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {(isHover || isToggleOpen) && (
        <Icon
          icon={note.isPinned ? RiPushpin2Fill : RiPushpin2Line}
          className="absolute p-2 text-base top-1.5 right-1.5 text-Icon-1"
          size="20"
        />
      )}

      <div className="w-full">
        <div>
          {note.title && (
            <div className="px-4 pt-3 font-medium">{note.title}</div>
          )}
        </div>
        <div>
          <div className="px-4 py-3">{note.content}</div>
        </div>
      </div>

      <div className="*:p-2 flex my-1 *:mx-0.5 h-8 *:text-Icon-1">
        {(isHover || isToggleOpen) && (
          <>
            {/* <Icon icon={MdOutlineAddAlert} size="18" /> */}
            {/* <Icon icon={MdOutlinePersonAddAlt} size="18" /> */}
            <Icon icon={MdOutlinePalette} size="18" />
            {/* <Icon icon={MdOutlineImage} size="18" /> */}
            <Icon icon={MdOutlineArchive} size="18" />
            <Icon icon={MdOutlineMoreVert} size="18" onClick={handleToggle} />
          </>
        )}
      </div>

      {isToggleOpen && (
        <div
          className={twMerge(
            "absolute z-10 py-1 bg-white rounded-md left-48 shadow-1",
            note.title ? "top-28" : "top-20"
          )}
        >
          <ul className="text-[0.8125rem] *:text-nowrap font-poppins *:pl-4 *:pr-2 *:py-1 *:border text-gray-600 *:border-transparent w-full">
            <li className="hover:bg-gray-100">Delete note</li>
            <li className="hover:bg-gray-100">Add label</li>
            <li className="hover:bg-gray-100">Make a copy</li>
            <li className="hover:bg-gray-100">Show checkboxes</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Note;
