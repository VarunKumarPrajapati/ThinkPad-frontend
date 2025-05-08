import { Note } from "../common";

export default function NoteList({ label, notes = [] }) {
  const renderList = notes.map((note) => <Note key={note?._id} note={note} />);
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      {!!notes.length && label && <div className="text-sm">{label}</div>}
      <div className="gap-4 columns-2 md:columns-2 lg:columns-3 xl:columns-5">
        {renderList}
      </div>
    </div>
  );
}
