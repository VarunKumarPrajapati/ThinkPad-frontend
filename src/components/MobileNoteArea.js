import React, { useState } from "react";
import {
  MdArrowBack,
  MdArchive,
  MdOutlineArchive,
  MdOutlinePalette,
} from "react-icons/md";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";

import Icon from "./common/Icon";
import Modal from "./common/Modal";
import Button from "./common/Button";
import TextArea from "./common/TextArea";
import ColorPalette from "./ColorPalette";

import useCreateNoteContext from "../hooks/use-createNoteContext";

function MobileNoteArea({ goBack, onSubmit }) {
  const { note, setNote, colors } = useCreateNoteContext();
  const [colorPalette, setColorPalette] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleColorPalette = () => {
    setColorPalette(!colorPalette);
  };

  return (
    <Modal>
      <div
        className="relative w-screen h-screen p-4 transition-colors bg-white"
        style={{
          backgroundColor: colors.find((color) => color.name === note.color)
            .code,
        }}
      >
        <div className="flex justify-between w-full pb-12">
          <div onClick={goBack} className="w-full">
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

        <div className="fixed inset-x-0 bottom-0 flex px-4 py-2 pl-4 pr-1">
          {colorPalette && (
            <div className="fixed inset-x-0 w-full px-4 bottom-14 animate-bottomUp">
              <ColorPalette />
            </div>
          )}
          <div className="flex items-center w-full ">
            <MdOutlinePalette size={26} onClick={handleColorPalette} />
          </div>
          <Button onClick={onSubmit}>Save</Button>
        </div>
      </div>
    </Modal>
  );
}

export default MobileNoteArea;
