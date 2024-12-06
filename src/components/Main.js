import React from "react";

import NoteList from "../components/NoteList";
import CreateNote from "./CreateNote";

import { CreateNoteProvider } from "../context/createNoteContext";

function Main() {
  return (
    <main className="relative flex flex-col w-full h-full">
      <CreateNoteProvider>
        <CreateNote />
      </CreateNoteProvider>
      <div className="w-auto h-full mx-8 transition-all duration-200 md:mx-16 lg:mx-28">
        <NoteList />
      </div>
    </main>
  );
}

export default Main;
