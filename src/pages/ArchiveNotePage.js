import { useSelector } from "react-redux";
import { NoteList } from "../components/ui";

function ArchiveNotePage() {
  const notes = useSelector((state) => state.notes);
  const archives = notes.filter((note) => note.isArchive);

  return (
    <div className="flex flex-col w-full h-full px-4">
      <NoteList notes={archives} />
    </div>
  );
}

export default ArchiveNotePage;
