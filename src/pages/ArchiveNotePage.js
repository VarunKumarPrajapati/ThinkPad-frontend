import { useSelector } from "react-redux";
import { NoteList } from "../components/ui";

function ArchiveNotePage({ notes }) {
  const { localNotes } = useSelector((state) => state.notes);

  const archives = localNotes.filter(
    (note) => note.isArchive && !note.isPinned
  );

  return (
    <div className="flex flex-col w-full h-full px-4">
      <NoteList notes={archives} />
    </div>
  );
}

export default ArchiveNotePage;
