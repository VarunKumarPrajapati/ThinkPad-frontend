import { Note } from "../common";

export default function NoteList({ label, notes = [] }) {
  const renderList = notes.map((note) => <Note key={note?._id} note={note} />);
  return (
    <div className="flex flex-col">
      {!!notes.length && label && <div className="text-sm">{label}</div>}
      <div className="flex flex-wrap md:flex-row">{renderList}</div>
    </div>
  );
}
