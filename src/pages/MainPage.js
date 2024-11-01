import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useFetchUserQuery } from "../store";

function MainPage() {
  const navigate = useNavigate();
  const { data, isError, error } = useFetchUserQuery();

  useEffect(() => {
    if (isError && error.status === 401) navigate("/login");
  }, [data, navigate, error, isError]);

  return (
    <div className="w-screen h-screen overflow-hidden font-roboto">
      <Navbar user={data} />
      <div className="flex w-full h-full pt-[65px]">
        <Sidebar />
        <main className="w-full h-full overflow-y-auto"></main>
      </div>
    </div>
  );
}

export default MainPage;
