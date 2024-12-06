import React, { useState } from "react";

import MobileNoteArea from "./MobileNoteArea";
import MobileCreateNoteButton from "./MobileCreateNoteButton";

import useCreateNoteContext from "../hooks/use-createNoteContext";
import { useCreateNoteMutation } from "../store";

function MobileCreateNote() {
  const { setCreatingNote, setNote, note } = useCreateNoteContext();
  const [createNote] = useCreateNoteMutation();
  const [openTab, setOpenTab] = useState("none");

  const handleOpenTab = (tabName) => {
    setCreatingNote(false);
    setOpenTab(tabName);
  };

  const handleSubmit = () => {
    if (!(note.title.length === 0) || !(note.content.length === 0)) {
      createNote(note);
      handleTab();
    }
  };

  const handleTab = () => {
    setOpenTab("none");
    setNote({
      title: "",
      content: "",
      color: "Default",
      isPinned: false,
      isArchive: false,
    });
  };
  return (
    <div>
      <MobileCreateNoteButton openTab={handleOpenTab} />
      {openTab === "Text" && (
        <MobileNoteArea goBack={handleTab} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default MobileCreateNote;
