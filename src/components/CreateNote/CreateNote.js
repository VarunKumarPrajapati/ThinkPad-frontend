import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DesktopCreateNote from "./DesktopCreateNote/DesktopCreateNote";
import MobileCreateNote from "./MobileCreateNote/MobileCreateNote";

import usePropsContext from "../../hooks/use-propsContext";
import { CreateNoteProvider } from "../../context/createNoteContext";

import { useFetchNotesQuery, setNotes } from "../../store";
export default function CreateNote() {
  const dispatch = useDispatch();
  const { data = [], isSuccess } = useFetchNotesQuery();
  const { isMobile } = usePropsContext();

  useEffect(() => {
    if (isSuccess) dispatch(setNotes(data));
  }, [data, isSuccess, dispatch]);

  return (
    <>
      <CreateNoteProvider>
        {isMobile ? (
          <MobileCreateNote />
        ) : (
          <div className="justify-center hidden md:flex">
            <DesktopCreateNote />
          </div>
        )}
      </CreateNoteProvider>
    </>
  );
}
