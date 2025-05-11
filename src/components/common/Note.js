import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";

import { NoteOptionToggle } from "../Toggles";
import { Archive, ColorPalette, Pin } from "../Toolbar/ToolbarItem";

import { updateNoteLocal } from "../../store";
import { usePropsContext } from "../../hooks";

function Note({ note }) {
  const { setModalVisibility, setSelectedNote } = usePropsContext();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name, value } = e.target;
    const patch = { [name]: value };
    if (name === "isPinned" && value) patch.isArchive = !value;
    if (name === "isArchive" && value) patch.isPinned = !value;

    handleChange(patch);

    if (e.message) {
      toast.success(e.message, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        transition: Slide,
      });
    }
  };

  const handleChange = (data) => {
    const changes = {
      _id: note._id,
      ...data,
    };

    dispatch(updateNoteLocal({ ...changes, sync: true }));
  };

  const handleNoteClick = () => {
    setSelectedNote(note);
    setModalVisibility(true);
  };

  return (
    <div
      style={{ backgroundColor: colors[note.color] }}
      className={twMerge(
        "group select-none relative cursor-pointer border border-gray-300 rounded-lg break-inside-avoid",
        "flex flex-col items-center justify-between transition-colors duration-200 md:hover:shadow-1 break-words",
        note.color !== "Default" && "border-0"
      )}
    >
      <div className="w-full h-full" onClick={handleNoteClick}>
        {note.title && (
          <div className="px-4 pt-3 text-sm font-medium md:text-base">
            {note.title}
          </div>
        )}
        <div className="px-4 py-3 text-xs md:text-sm">{note.content}</div>
      </div>

      <div className="flex items-center h-8 my-1 md:*:group-hover:block *:hidden">
        <Pin
          isPinned={note.isPinned}
          onClick={handleClick}
          size={20}
          className="absolute p-2 top-1.5 right-1.5"
        />
        <ColorPalette active={note.color} onClick={handleClick} />
        <Archive isArchive={note.isArchive} onClick={handleClick} />
        <NoteOptionToggle note={note} />
      </div>
    </div>
  );
}

const colors = {
  Default: "rgb(255,255,255)",
  Coral: "rgb(250,175,168)",
  Peach: "rgb(243,159,118)",
  Sand: "rgb(255,248,184)",
  Mint: "rgb(226,246,211)",
  Sage: "rgb(180,221,211)",
  Fog: "rgb(212,228,237)",
  Storm: "rgb(174,204,220)",
  Duck: "rgb(211,191,219)",
  Blossom: "rgb(246,226,221)",
  Clay: "rgb(233,227,212)",
  Chalk: "rgb(239,239,241)",
};

export default Note;
