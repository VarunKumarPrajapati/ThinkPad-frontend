import React from "react";

import Note from "./Note";

import { useFetchNotesQuery } from "../store";

function ArchiveNoteList() {
  const { data: notes } = useFetchNotesQuery();

  const renderNoteList = notes
    ?.filter((note) => note.isArchive === true)
    .map((note, key) => <Note note={note} key={key} />);

  return (
    <div className="flex flex-wrap flex-shrink-0 w-full h-full ">
      {renderNoteList}
    </div>
  );
}

export default ArchiveNoteList;
