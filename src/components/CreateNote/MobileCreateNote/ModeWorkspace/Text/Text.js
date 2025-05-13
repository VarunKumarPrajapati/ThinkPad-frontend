import { useDispatch } from "react-redux";
import { MdArrowBack } from "react-icons/md";

import { Button, TextArea, Input } from "../../../../common";
import { Archive, Pin, ColorPalette } from "../../../../Toolbar/ToolbarItem";

import useCreateNoteContext from "../../../../../hooks/use-createNoteContext";

import { addNoteOptimistic } from "../../../../../store";

function Text() {
  const dispatch = useDispatch();
  const { note, setNote, setModeWorkspace } = useCreateNoteContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = () => {
    if (note.title.length || note.content.length) {
      dispatch(addNoteOptimistic(note));
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
      className="fixed inset-0 z-50 p-4 overflow-hidden transition-colors"
      style={{
        backgroundColor: colors[note.color],
      }}
    >
      <div className="flex justify-between w-full pb-12">
        <div onClick={handleClose} className="w-full">
          <MdArrowBack size={30} />
        </div>
        <div className="flex justify-between gap-x-4">
          <Archive onClick={handleChange} size={26} className="p-0" />
          <Pin onClick={handleChange} size={26} className="p-0" />
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-2 gap-y-6">
        <Input
          name="title"
          placeholder="Title"
          className="p-0 text-2xl border-0 bg-inherit"
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

      <div className="fixed inset-x-0 bottom-0 flex justify-between py-2 pl-4 pr-1">
        <ColorPalette onClick={handleChange} size={26} />
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
