import React from "react";

import Note from "./Note";

import { useFetchNotesQuery } from "../store";

function NoteList() {
  const { data: notes } = useFetchNotesQuery();

  const renderNoteList = notes?.map((note, key) => {
    return <Note note={note} key={key} />;
  });

  return <div className="flex flex-wrap w-full h-full">{renderNoteList}</div>;
}

export default NoteList;
