import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateNote from "../components/CreateNote/CreateNote";
import ArchiveNotePage from "./ArchiveNotePage";
import CommonNotePage from "./CommonNotePage";

import usePropsContext from "../hooks/use-propsContext";

function MainPage() {
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

  return (
    <div className="flex flex-col w-screen h-screen font-roboto">
      <Header />
      <Sidebar>
        <CreateNote />

        <Routes>
          <Route path="/" element={<CommonNotePage />} />
          <Route path="/archive" element={<ArchiveNotePage />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default MainPage;
