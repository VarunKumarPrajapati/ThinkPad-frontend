import { ColorPalette, Archive } from "./ToolbarItem";

export default function Toolbar({ note, onClick }) {
  return (
    <div className="flex items-center justify-start ">
      <ColorPalette active={note.color} onClick={onClick} />
      <Archive isArchive={note.isArchive} onClick={onClick} />
    </div>
  );
}
