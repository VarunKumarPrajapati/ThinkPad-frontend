import { useSelector } from "react-redux";
import { NoteList } from "../components/ui";

export default function CommonNotePage() {
  const { localNotes } = useSelector((state) => state.notes);
  const { commons, pins } = {
    commons: [],
    pins: [],
  };

  localNotes.forEach((note) => {
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
