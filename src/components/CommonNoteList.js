import React from "react";

import Note from "./Note";

import { useFetchNotesQuery } from "../store";

function CommonNoteList() {
  const { data: notes } = useFetchNotesQuery();

  const pinnedNoteList = notes
    ?.filter((note) => note.isPinned === true)
    .map((note, key) => <Note note={note} key={key} />);

  const renderNoteList = notes
    ?.filter((note) => note.isArchive === false && note.isPinned === false)
    .map((note, key) => <Note note={note} key={key} />);

  return (
    <div className="flex flex-col w-full h-full">
      {pinnedNoteList?.length > 0 && (
        <div>
          {<div className="text-sm">Pinned</div>}
          <div className="flex flex-wrap flex-shrink-0">{pinnedNoteList}</div>
        </div>
      )}

      {renderNoteList?.length > 0 && (
        <div>
          {pinnedNoteList.length > 0 && <div className="text-sm">Others</div>}
          <div className="flex flex-wrap flex-shrink-0">{renderNoteList}</div>
        </div>
      )}
    </div>
  );
}

export default CommonNoteList;
