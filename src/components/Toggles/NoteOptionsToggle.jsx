import { forwardRef } from "react";
import { useDispatch } from "react-redux";

import { deleteNoteLocal } from "../../store";

import { BaseToggle } from "../ui";
const NoteOptionToggle = forwardRef(({ note }, ref) => {
  const dispatch = useDispatch();
  const list = [
    {
      title: "Delete note",
      action: () => dispatch(deleteNoteLocal(note._id)),
    },
    // {
    //   title: "Make a copy",
    //   // action: () => dispatch(makeCopyAction(note.id)),
    // },
    // {
    //   title: "Show checkboxes",
    //   // action: () => console.log("Show checkboxes action"),
    // },
  ];

  const renderList = list.map((item, key) => {
    return (
      <li
        key={key}
        className="py-1 pl-4 pr-2 text-nowrap hover:bg-gray-100"
        onClick={item.action}
      >
        {item.title}
      </li>
    );
  });

  return (
    <BaseToggle ref={ref}>
      <ul className="shadow-1 bg-white rounded-md text-[0.8125rem] py-1 font-poppins text-gray-600">
        {renderList}
      </ul>
    </BaseToggle>
  );
});

export default NoteOptionToggle;
