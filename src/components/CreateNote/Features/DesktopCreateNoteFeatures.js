import React, { useEffect, useRef } from "react";
import { toast, Slide } from "react-toastify";
import {
  MdArchive,
  MdOutlineArchive,
  MdOutlinePalette,
  // MdOutlineMoreVert,
  // MdOutlineAddAlert,
  // MdOutlinePersonAddAlt,
  // MdOutlineImage,
} from "react-icons/md";

import Icon from "../../common/Icon";
import Button from "../../common/Button";
import MoreToggle from "../DesktopCreateNote/Toggles/MoreToggle";
import BackgroundToggle from "../DesktopCreateNote/Toggles/BackgroundToggle";
// import ReminderToggle from "./ReminderToggle";

import useCreateNoteContext from "../../../hooks/use-createNoteContext";

function CreateNoteFeatures() {
  const toggleRef = useRef(null);
  const {
    note,
    setNote,
    toggle,
    setToggle,
    setCreatingNote,
  } = useCreateNoteContext();

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setToggle]);

  return (
    <div ref={toggleRef} className="relative flex flex-row w-full my-1">
      <div className="w-full *:p-2 *:mx-2 inline-flex *:text-Icon-1">
        {/* <Icon
          size="18"
          icon={MdOutlineAddAlert}
          onClick={() => setToggle("ReminderToggle")}
        /> */}

        {/* <Icon size="18" icon={MdOutlinePersonAddAlt} /> */}

        <Icon
          size="18"
          icon={MdOutlinePalette}
          onClick={() => setToggle("BackgroundToggle")}
        />

        {/* <Icon size="18" icon={MdOutlineImage} /> */}

        <Icon
          size="18"
          icon={note.isArchive ? MdArchive : MdOutlineArchive}
          onClick={handleArchiveNote}
        />

        {/* <Icon
          size="18"
          icon={MdOutlineMoreVert}
          onClick={() => setToggle("MoreToggle")}
        /> */}
      </div>

      <Button
        onClick={() => {
          setCreatingNote(false);
          setToggle("none");
        }}
        className="px-6 py-1 mr-4 font-sans text-sm font-semibold border-0 text-Icon-1 bg-inherit hover:bg-gray-100"
      >
        Close
      </Button>

      {toggle === "MoreToggle" && <MoreToggle />}
      {toggle === "BackgroundToggle" && <BackgroundToggle />}
      {/* {toggle === "ReminderToggle" && <ReminderToggle />} */}
    </div>
  );
}

export default CreateNoteFeatures;
