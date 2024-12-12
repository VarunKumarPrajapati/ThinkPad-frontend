import React from "react";

import { Modal } from "../../common";
import NoteButton from "./NoteButton";
import Text from "./ModeWorkspace/Text/Text";

import useCreateNoteContext from "../../../hooks/use-createNoteContext";
import { twMerge } from "tailwind-merge";

function MobileCreateNote() {
  const { modeWorkspace, isCreatingNote } = useCreateNoteContext();

  return (
    <>
      <div
        className={twMerge(
          "fixed bottom-0 right-0 p-2",
          isCreatingNote &&
            "bg-gray-400 bg-opacity-5 inset-0 z-50 flex items-end justify-end"
        )}
      >
        <NoteButton />
      </div>

      <Modal>{modeWorkspace === "Text" && <Text />}</Modal>
    </>
  );
}

export default MobileCreateNote;
