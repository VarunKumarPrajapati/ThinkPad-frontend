import React from "react";

import Note from "../components/Note";

import { useFetchNotesQuery } from "../store";

function ArchiveNotePage() {
  const { data: notes } = useFetchNotesQuery();

  const renderNoteList = notes
    ?.filter((note) => note.isArchive === true)
    .map((note, key) => <Note note={note} key={key} />);

  return (
    <div className="px-4">
      <div className="flex flex-row flex-wrap flex-shrink-0 w-full h-full ">
        {renderNoteList}
      </div>
    </div>
  );
}

export default ArchiveNotePage;
