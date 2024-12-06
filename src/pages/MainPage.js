import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import usePropsContext from "../hooks/use-propsContext";
import { useFetchUserQuery } from "../store";

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

  return (
    <div className="w-screen h-screen overflow-hidden font-roboto">
      <ToastContainer />
      <Navbar user={data} />
      <div className="flex w-full h-full pt-[65px]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default MainPage;
