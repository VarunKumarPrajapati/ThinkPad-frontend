import React, { useState } from "react";
import Logo from "./common/Logo";
import Input from "./common/Input";
import GIcon from "./common/GIcon";
import ProfileToggle from "./ProfileToggle";
import Avatar from "./common/Avatar";

import usePropsContext from "../hooks/use-propsContext";

function Navbar() {
  const {
    setIsSidebarExpanded,
    isLayoutGrid,
    setIsLayoutGrid,
  } = usePropsContext();

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const user = {
    email: "varunkumarprajapati57@gmail.com",
    username: "Varun Kumar Prajapati",
    avatar: "luffy",
  };

  const handleLayout = () => {
    setIsLayoutGrid((prevValue) => !prevValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <header className="fixed top-0 w-full bg-white h-fit ">
      <div className="relative flex items-center px-3 py-2 md:border-b md:p-2 justify-evenly">
        {/* Logo and Icon only for Desktop */}
        <div className="items-center hidden pr-7 md:flex">
          <GIcon
            clickable
            icon="menu"
            onClick={() => setIsSidebarExpanded((prevValue) => !prevValue)}
          />
          <Logo />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="w-full md:pl-3 md:pr-8">
            <form
              onSubmit={handleSubmit}
              className="flex items-center max-w-[720px] bg-gray-100 md:rounded-lg rounded-full w-full "
            >
              <div className="hidden md:inline-block">
                <GIcon icon="search" className="p-2 mx-2.5" />
              </div>

              {/* Menu Icon Only for Mobile  */}
              <GIcon
                clickable
                icon="menu"
                onClick={() => setIsSidebarExpanded((prevValue) => !prevValue)}
                className={"md:hidden"}
              />

              <div className="w-full">
                <Input
                  placeholder="Search"
                  className="py-3"
                  onChange={handleChange}
                />
              </div>

              <GIcon
                clickable
                icon={isLayoutGrid ? "grid_view" : "view_agenda"}
                outline
                onClick={handleLayout}
                className="hover:text-black md:hidden"
              />

              <div className="hidden md:inline-block">
                <GIcon
                  clickable
                  icon="close"
                  className="p-2 mx-2.5"
                  type="reset"
                />
              </div>
            </form>
          </div>

          <div className="hidden md:flex">
            <GIcon clickable icon="refresh" className=" hover:text-black" />
            <GIcon
              clickable
              icon={isLayoutGrid ? "grid_view" : "view_agenda"}
              outline
              className="hover:text-black"
              onClick={handleLayout}
            />
            <GIcon
              clickable
              icon="settings"
              className="hover:text-black"
              outline
            />
          </div>
        </div>

        <div className="flex items-center justify-center pl-2 md:pr-1 md:pl-8">
          <button onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <Avatar currentAvatar={user.avatar} className="w-12 " />
          </button>

          {isToggleOpen && <ProfileToggle className="mt-16 mr-2" user={user} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
