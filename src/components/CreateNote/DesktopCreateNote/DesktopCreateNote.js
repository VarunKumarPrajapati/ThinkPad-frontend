import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";

import { Icon, Input, TextArea } from "../../common";
import CreateNoteFeatures from "../Features/DesktopCreateNoteFeatures";

import useCreateNoteContext from "../../../hooks/use-createNoteContext";
import { addNoteOptimistic } from "../../../store";

function CreateNote() {
  const noteRef = useRef(null);
  const dispatch = useDispatch();

  const { colors, isCreatingNote, note, setCreatingNote, setNote } =
    useCreateNoteContext();

  const handleCreatingNote = () => {
    setCreatingNote(true);
  };

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handlePinClick = (e) => {
    e.stopPropagation();
    e.target = {
      name: "isPinned",
      value: !note.isPinned,
    };
    handleNoteChange(e);
  };

  useEffect(() => {
    const handleBlur = (e) => {
      if (noteRef.current && !noteRef.current.contains(e.target)) {
        if (note.content.length || note.title.length) {
          const tempId = `temp-${Date.now()}`;
          dispatch(addNoteOptimistic({ _id: tempId, ...note }));
        }

        setNote({
          title: "",
          content: "",
          color: "Default",
          isPinned: false,
          isArchive: false,
        });

        setCreatingNote(false);
      }
    };

    document.addEventListener("click", handleBlur);

    return () => document.removeEventListener("click", handleBlur);
  }, [note, setNote, setCreatingNote, dispatch]);

  return (
    <div
      style={{
        backgroundColor: colors.find((color) => color.name === note.color).code,
      }}
      className="flex flex-col mt-8 mb-4 rounded-lg shadow-2 min-w-auto w-[600px] transition-colors duration-200 font-sans"
    >
      {isCreatingNote ? (
        <div ref={noteRef} className="relative text-Icon-1">
          <Icon
            size="24"
            icon={note.isPinned ? RiPushpin2Fill : RiPushpin2Line}
            className="absolute p-2 text-base top-1.5 right-1.5"
            onClick={handlePinClick}
          />

          <form
            autoComplete="off"
            className="*:placeholder:text-gray-600 font-medium *:px-4 *:py-3 flex flex-col"
          >
            <Input
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={handleNoteChange}
              className="!p-0 !m-0 bg-transparent border-0"
            />

            <TextArea
              name="content"
              placeholder="Take a note..."
              autoFocus={isCreatingNote}
              value={note.content}
              onChange={handleNoteChange}
              className="text-sm resize-none"
            />
          </form>

          <CreateNoteFeatures />
        </div>
      ) : (
        <div
          onClick={handleCreatingNote}
          className="px-4 pb-2.5 pt-3 font-semibold text-[#4c4c4c]"
        >
          Take a note...
        </div>
      )}
    </div>
  );
}

export default CreateNote;
