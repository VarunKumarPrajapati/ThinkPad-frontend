import React from "react";

import { Note } from "../components/common";

import { useFetchNotesQuery } from "../store";

function CommonNotePage() {
  const { data: notes } = useFetchNotesQuery();

  const pinnedNoteList = notes
    ?.filter((note) => note.isPinned === true)
    .map((note, key) => <Note note={note} key={key} />);

  const renderNoteList = notes
    ?.filter((note) => note.isArchive === false && note.isPinned === false)
    .map((note, key) => <Note note={note} key={key} />);

  return (
    <div className="flex flex-col w-full h-full px-4">
      {pinnedNoteList?.length > 0 && (
        <div className="flex flex-col">
          {<div className="text-sm">Pinned</div>}
          <div className="flex flex-wrap md:flex-row">{pinnedNoteList}</div>
        </div>
      )}

      {renderNoteList?.length > 0 && (
        <div className="flex flex-col">
          {pinnedNoteList.length > 0 && <div className="text-sm">Others</div>}
          <div className="flex flex-row flex-wrap ">{renderNoteList}</div>
        </div>
      )}
    </div>
  );
}

export default CommonNotePage;
