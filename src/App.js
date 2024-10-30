import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden font-roboto">
      <Navbar />
      <div className="flex w-full h-full pt-[65px]">
        <Sidebar />
        <main className="w-full h-full overflow-y-auto"></main>
      </div>
    </div>
  );
}

export default App;
