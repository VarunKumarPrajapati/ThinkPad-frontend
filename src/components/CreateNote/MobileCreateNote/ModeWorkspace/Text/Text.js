import { useRef } from "react";
import {
  MdArrowBack,
  MdArchive,
  MdOutlineArchive,
  MdOutlinePalette,
} from "react-icons/md";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";

import { Icon, Button, TextArea } from "../../../../common";
import { ColorPalette } from "../../../../Toggles";

import useCreateNoteContext from "../../../../../hooks/use-createNoteContext";

import { addNoteLocal } from "../../../../../store";
import { useDispatch } from "react-redux";

function Text() {
  const dispatch = useDispatch();
  const colorPaletteRef = useRef(null);
  const { note, setNote, colors, setModeWorkspace } = useCreateNoteContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = () => {
    if (!(note.title.length === 0) || !(note.content.length === 0)) {
      dispatch(addNoteLocal(note));
      handleClose();
    }
  };

  const handleClose = () => {
    setModeWorkspace("none");
    setNote({
      title: "",
      content: "",
      color: "Default",
      isPinned: false,
      isArchive: false,
    });
  };
  return (
    <div
      className="fixed inset-0 z-50 p-4 overflow-hidden transition-colors bg-white"
      style={{
        backgroundColor: colors.find((color) => color.name === note.color).code,
      }}
    >
      <div className="flex justify-between w-full pb-12">
        <div onClick={handleClose} className="w-full">
          <MdArrowBack size={30} />
        </div>
        <div className="flex justify-between gap-x-4">
          <Icon
            icon={note.isPinned ? RiPushpin2Fill : RiPushpin2Line}
            className={"p-0"}
            size="26"
            onClick={(e) => {
              e.target = { name: "isPinned", value: !note.isPinned };
              handleChange(e);
            }}
          />
          <Icon
            icon={note.isArchive ? MdArchive : MdOutlineArchive}
            className={"p-0"}
            size="26"
            onClick={(e) => {
              e.target = { name: "isArchive", value: !note.isArchive };
              handleChange(e);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-2 gap-y-6">
        <TextArea
          name="title"
          placeholder="Title"
          className="text-2xl"
          onChange={handleChange}
        />
        <TextArea
          name="content"
          placeholder="Note"
          className="text-lg"
          rows="30"
          onChange={handleChange}
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 flex py-2 pl-4 pr-1">
        <div className="flex-1">
          <Icon icon={MdOutlinePalette} size={26} ref={colorPaletteRef} />
          <ColorPalette
            ref={colorPaletteRef}
            onClick={(color) => {
              const e = {};
              e.target = { name: "color", value: color };
              handleChange(e);
            }}
            className="inset-x-2 -top-16 "
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="px-8 font-semibold rounded-xl"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Text;
