import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import CreateNote from "../CreateNote/CreateNote";
import { UpdateNoteModal } from "../Modals";

import usePropsContext from "../../hooks/use-propsContext";
import { setNoteError, setNotes, useFetchNotesQuery } from "../../store";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {
    modalVisibility,
    setModalVisibility,
    selectedNote,
    setSelectedNote,
    setIsMobile,
  } = usePropsContext();

  const handleModalClose = () => {
    setModalVisibility(false);
    setSelectedNote(null);
  };

  React.useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const { error } = useSelector((state) => state.notes);

  React.useEffect(() => {
    if (error) {
      toast.error("Something went wrong & rolling back");
      dispatch(setNoteError(null));
    }
  }, [error, dispatch]);

  const { data = [], isSuccess } = useFetchNotesQuery();

  React.useEffect(() => {
    if (isSuccess) dispatch(setNotes(data));
  }, [data, isSuccess, dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen font-roboto">
      <Header />
      <Sidebar>
        {!(pathname === "/search") && <CreateNote />}
        {selectedNote && (
          <UpdateNoteModal
            isOpen={modalVisibility}
            note={selectedNote}
            onClose={handleModalClose}
          />
        )}
        <Outlet />
      </Sidebar>
    </div>
  );
}
