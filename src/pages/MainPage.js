import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateNote from "../components/CreateNote/CreateNote";
import ArchiveNotePage from "./ArchiveNotePage";
import CommonNotePage from "./CommonNotePage";

import usePropsContext from "../hooks/use-propsContext";
import { setNoteError } from "../store";

function MainPage() {
  const dispatch = useDispatch();
  const { setIsMobile } = usePropsContext();

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const { localNotes, error } = useSelector((state) => state.notes);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong & rolling back");
      dispatch(setNoteError(null));
    }
  }, [error, dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen font-roboto">
      <Header />
      <Sidebar>
        <CreateNote />

        <Routes>
          <Route path="/" element={<CommonNotePage notes={localNotes} />} />
          <Route
            path="/archive"
            element={<ArchiveNotePage notes={localNotes} />}
          />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default MainPage;
