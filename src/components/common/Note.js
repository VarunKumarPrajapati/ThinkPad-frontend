import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";

import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import {
  // MdOutlineImage,
  // MdOutlineAddAlert,
  // MdOutlinePersonAddAlt,
  MdOutlineArchive,
  MdOutlineMoreVert,
  MdOutlinePalette,
  MdOutlineUnarchive,
} from "react-icons/md";

import Icon from "./Icon";
import { NoteOptionToggle, ColorPalette } from "../Toggles";

import { updateNoteLocal } from "../../store";

function Note({ note }) {
  const optionRef = useRef(null);
  const colorPaletteRef = useRef(null);

  const dispatch = useDispatch();

  const handleChange = (data) => {
    const changes = {
      _id: note._id,
      ...data,
    };

    dispatch(updateNoteLocal(changes));
  };

  return (
    <div
      style={{ backgroundColor: colors[note.color] }}
      className={twMerge(
        "group select-none relative cursor-pointer border border-gray-300 rounded-lg w-full h-full",
        "flex flex-col items-center justify-between transition-colors duration-200 hover:shadow-1"
      )}
    >
      <Icon
        icon={note.isPinned ? RiPushpin2Fill : RiPushpin2Line}
        className="absolute p-2 text-base top-1.5 right-1.5 text-Icon-1 group-hover:block hidden"
        size="20"
        onClick={() =>
          handleChange({ isPinned: !note.isPinned, isArchive: false })
        }
      />

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

      <div className="flex items-center h-8 my-1 *:group-hover:block *:hidden">
        <div className="relative">
          <Icon icon={MdOutlinePalette} size="18" ref={colorPaletteRef} />
          <ColorPalette
            ref={colorPaletteRef}
            defaultColor={note.color}
            onClick={(color) => handleChange({ color })}
          />
        </div>
        <Icon
          icon={note.isArchive ? MdOutlineUnarchive : MdOutlineArchive}
          size="18"
          onClick={() =>
            handleChange({ isArchive: !note.isArchive, isPinned: false })
          }
        />
        <div className="relative">
          <Icon icon={MdOutlineMoreVert} size="18" ref={optionRef} />
          <NoteOptionToggle ref={optionRef} note={note} />
        </div>
      </div>
    </div>
  );
}

const colors = {
  Default: "rgb(255,255,255)",
  Coral: "rgb(250,175,168)",
  Peach: "rgb(243,159,118)",
  Sand: "rgb(255,248,184)",
  Mint: "rgb(226,246,211)",
  Sage: "rgb(180,221,211)",
  Fog: "rgb(212,228,237)",
  Storm: "rgb(174,204,220)",
  Duck: "rgb(211,191,219)",
  Blossom: "rgb(246,226,221)",
  Clay: "rgb(233,227,212)",
  Chalk: "rgb(239,239,241)",
};

export default Note;
