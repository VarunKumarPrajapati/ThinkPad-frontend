import React from "react";

import CommonNoteList from "./CommonNoteList";
import ArchiveNoteList from "./ArchiveNoteList";

import usePropsContext from "../hooks/use-propsContext";

function NoteList() {
  const { active } = usePropsContext();

  return (
    <div className="w-full h-full">
      {active === "Notes" && <CommonNoteList />}
      {active === "Archive" && <ArchiveNoteList />}
    </div>
  );
}

export default NoteList;
