import { toast, Slide } from "react-toastify";
import {
  MdOutlineArchive,
  MdOutlineUnarchive,
  // MdOutlineMoreVert,
  // MdOutlineAddAlert,
  // MdOutlinePersonAddAlt,
  // MdOutlineImage,
} from "react-icons/md";

import { Icon, Button } from "../../common";
// import MoreToggle from "../DesktopCreateNote/Toggles/MoreToggle";
// import ReminderToggle from "./ReminderToggle";

import useCreateNoteContext from "../../../hooks/use-createNoteContext";
import ColorPalette from "../../Toolbar/ToolbarItem/ColorPalette";

function CreateNoteFeatures() {
  const { note, setNote, setCreatingNote } = useCreateNoteContext();

  const handleArchiveNote = (e) => {
    e.stopPropagation();
    setNote({
      ...note,
      isArchive: !note.isArchive,
    });

    toast(note.isArchive ? "Note Unarchive" : "Note Archive", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  return (
    <div className="inline-flex w-full my-1">
      <div className="inline-flex w-full">
        {/* <Icon
          size="18" 
          icon={MdOutlineAddAlert}
          onClick={() => setToggle("ReminderToggle")}
        /> */}

        {/* <Icon size="18" icon={MdOutlinePersonAddAlt} /> */}

        <ColorPalette
          onClick={({ target }) =>
            setNote((prev) => ({ ...prev, [target.name]: target.value }))
          }
        />

        {/* <Icon size="18" icon={MdOutlineImage} /> */}

        <Icon
          size="18"
          icon={note.isArchive ? MdOutlineArchive : MdOutlineUnarchive}
          onClick={handleArchiveNote}
        />

        {/* <Icon
          size="18"
          icon={MdOutlineMoreVert}
          onClick={() => setToggle("MoreToggle")}
        /> */}
      </div>

      <Button
        onClick={() => setCreatingNote(false)}
        className="px-6 mr-4 font-sans !text-sm font-semibold border-0 text-Icon-1 bg-inherit hover:bg-gray-100"
      >
        Close
      </Button>

      {/* {toggle === "MoreToggle" && <MoreToggle />} */}
      {/* {toggle === "ReminderToggle" && <ReminderToggle />} */}
    </div>
  );
}

export default CreateNoteFeatures;
