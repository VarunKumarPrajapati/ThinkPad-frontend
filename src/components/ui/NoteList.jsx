import { Note } from "../common";

export default function NoteList({ label, notes = [] }) {
  const renderList = notes.map((note) => <Note key={note?._id} note={note} />);
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      {!!notes.length && label && <div className="text-sm">{label}</div>}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {renderList}
      </div>
    </div>
  );
}
