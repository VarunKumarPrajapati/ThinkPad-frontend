import { useDispatch } from "react-redux";
import { MdOutlineMoreVert } from "react-icons/md";

import { BaseToggle } from "../ui";
import { Icon } from "../common";

import { removeNoteById } from "../../store";

export default function NoteOptionToggle({ note, size = 18 }) {
  const dispatch = useDispatch();
  const list = [
    {
      title: "Delete note",
      action: () => dispatch(removeNoteById(note._id)),
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
    <BaseToggle icon={<Icon icon={MdOutlineMoreVert} size={size} />}>
      <ul className=" bg-white rounded-md text-[0.8125rem] py-1 font-poppins text-gray-600">
        {renderList}
      </ul>
    </BaseToggle>
  );
}
