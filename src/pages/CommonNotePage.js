import { useSelector } from "react-redux";
import { NoteList } from "../components/ui";

export default function CommonNotePage() {
  const notes = useSelector((state) => state.notes.userNotes);
  const { commons, pins } = {
    commons: [],
    pins: [],
  };

  notes.forEach((note) => {
    if (note.isPinned) pins.push(note);
    if (!note.isArchived) commons.push(note);
  });

  return (
    <div className="flex flex-col w-full h-full px-4">
      <NoteList label="Pinned" notes={pins} />
      <NoteList label="Others" notes={commons} />
    </div>
  );
}
