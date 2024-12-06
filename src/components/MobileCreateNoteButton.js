import React from "react";
import { twMerge } from "tailwind-merge";
import { MdAdd, MdTextFields } from "react-icons/md";

import useCreateNoteContext from "../hooks/use-createNoteContext";

function MobileCreateNoteButton({ openTab }) {
  const { isCreatingNote, setCreatingNote } = useCreateNoteContext();

  const handleCreateNote = () => {
    setCreatingNote(!isCreatingNote);
  };

  const featuresList = [{ title: "Text", icon: MdTextFields }];

  const renderFeaturesList = featuresList.map((feature, key) => (
    <div
      key={key}
      onClick={() => openTab(feature.title)}
      className="flex items-center p-4 text-white bg-black rounded-full animate-bottomUp gap-x-1 w-fit"
    >
      {feature.title} <feature.icon size={24} />
    </div>
  ));

  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-end p-2 gap-y-2 ">
      {isCreatingNote && (
        <div className="flex flex-col items-end gap-y-2">
          {renderFeaturesList}
        </div>
      )}

      <div
        onClick={handleCreateNote}
        className="flex items-center justify-center text-white bg-black size-16 rounded-2xl"
      >
        <MdAdd
          size={28}
          className={twMerge(
            "transition-transform",
            isCreatingNote ? "rotate-45" : "rotate-0"
          )}
        />
      </div>
    </div>
  );
}

export default MobileCreateNoteButton;
