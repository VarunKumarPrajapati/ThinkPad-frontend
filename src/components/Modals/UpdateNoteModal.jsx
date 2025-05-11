import { useEffect, useState } from "react";
import { toast, Slide } from "react-toastify";
import { useDispatch } from "react-redux";

import { Modal } from "../ui";
import { Button, TextArea } from "../common";
import { Pin } from "../Toolbar/ToolbarItem";
import Toolbar from "../Toolbar/Toolbar";

import { useDebounce } from "../../hooks";
import { updateNoteLocal } from "../../store";

export default function UpdateNoteModal({ note, isOpen, onClose }) {
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const [data, setData] = useState(note);

  const handleClose = () => onClose();

  const handleClick = (e) => {
    const { name, value } = e.target;
    const patch = { [name]: value };
    if (name === "isPinned" && value) patch.isArchive = !value;
    if (name === "isArchive" && value) patch.isPinned = !value;
    const newData = { ...data, ...patch };
    setData((prev) => ({ ...prev, ...patch }));

    if (e.message) {
      toast.success(e.message, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        transition: Slide,
      });
    }

    handleSubmit(newData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData((prev) => ({ ...prev, [name]: value }));

    handleSubmit(newData);
  };

  const handleSubmit = (data) => {
    dispatch(updateNoteLocal(data));
    debounce(() => dispatch(updateNoteLocal({ ...data, sync: true })));
  };

  useEffect(() => {
    setData(note);
  }, [note]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      className="w-full h-full md:w-[600px] md:h-60 md:rounded-lg"
      style={{ backgroundColor: colors[data.color] }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full break-words gap-y-4">
        <Pin
          isPinned={data.isPinned}
          onClick={handleClick}
          className="absolute p-2 top-1.5 right-1.5"
        />
        <div className="w-full h-full">
          <div className="px-4 pt-3">
            <input
              name="title"
              className="w-11/12 text-lg bg-transparent focus:outline-none placeholder:text-Icon-1"
              value={data.title || ""}
              placeholder="Title"
              onChange={handleChange}
            />
          </div>

          <div className="w-full h-full px-4 py-3">
            <TextArea
              name="content"
              value={data.content || ""}
              placeholder="Take a note..."
              onChange={handleChange}
              className="w-full h-full text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-2 py-1">
          <Toolbar note={data} onClick={handleClick} />
          <Button neutral onClick={handleClose} children="Close" />
        </div>
      </div>
    </Modal>
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
