import { NoteList } from "../components/ui";

export default function CommonNotePage({ notes }) {
  const { commons, pins } = {
    commons: [],
    pins: [],
  };

  notes.forEach((note) => {
    if (note.isPinned && !note.isArchive) pins.push(note);
    if (!note.isArchive && !note.isPinned) commons.push(note);
  });

  return (
    <div className="flex flex-col w-full h-full px-4">
      <NoteList label="Pinned" notes={pins} />
      <NoteList label="Others" notes={commons} />
    </div>
  );
}
