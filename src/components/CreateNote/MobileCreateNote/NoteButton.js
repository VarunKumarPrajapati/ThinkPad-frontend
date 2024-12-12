import React, { useEffect, useRef } from "react";
import { MdAdd } from "react-icons/md";
import { twMerge } from "tailwind-merge";

import useCreateNoteContext from "../../../hooks/use-createNoteContext";
import Modes from "./Modes/Modes";

function NoteButton() {
  const noteBtnRef = useRef(null);
  const { isCreatingNote, setCreatingNote } = useCreateNoteContext();

  const handleCreateNote = () => {
    setCreatingNote(!isCreatingNote);
  };

  useEffect(() => {
    const handleNoteBtn = (e) => {
      if (noteBtnRef.current && !noteBtnRef.current.contains(e.target)) {
        setCreatingNote(false);
      }
    };

    document.addEventListener("click", handleNoteBtn);

    return () => {
      document.removeEventListener("click", handleNoteBtn);
    };
  }, [setCreatingNote]);

  return (
    <div className="flex flex-col items-end justify-end gap-y-2">
      {isCreatingNote && <Modes />}
      <div
        ref={noteBtnRef}
        onClick={handleCreateNote}
        className="flex items-center justify-center text-white bg-[#325f96] size-16 rounded-2xl shadow-2"
      >
        <MdAdd
          size={28}
          className={twMerge(
            "transition-transform",
            isCreatingNote ? "rotate-45" : "rotate-0"
          )}
        />
      </div>
    </div>
  );
}

export default NoteButton;
