import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Header/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateNote from "../components/CreateNote/CreateNote";
import ArchiveNotePage from "./ArchiveNotePage";
import CommonNotePage from "./CommonNotePage";

import usePropsContext from "../hooks/use-propsContext";
import { useFetchUserQuery } from "../store";
import Header from "../components/Header/Header";

function MainPage() {
  const navigate = useNavigate();
  const { data, error } = useFetchUserQuery();
  const { setIsMobile } = usePropsContext();

  useEffect(() => {
    if (error?.status === 401) {
      navigate("/login");
    }
  }, [data, navigate, error]);

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

  console.log("From main page...");

  return (
    <div className="flex flex-col w-screen h-screen font-roboto">
      <Header>
        <Navbar user={data} />
      </Header>

      <Sidebar>
        <CreateNote />

        <Routes>
          <Route path="/" element={<CommonNotePage />} />
          <Route path="/archive" element={<ArchiveNotePage />} />
        </Routes>
      </Sidebar>

      <ToastContainer />
    </div>
  );
}

export default MainPage;
