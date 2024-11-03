import React, { useState } from "react";

import Logo from "./common/Logo";
import Input from "./common/Input";
import GIcon from "./common/GIcon";
import Avatar from "./common/Avatar";
import ProfileToggle from "./ProfileToggle";

import usePropsContext from "../hooks/use-propsContext";
import { twMerge } from "tailwind-merge";

function Navbar({ user }) {
  const {
    setIsSidebarExpanded,
    isLayoutGrid,
    setIsLayoutGrid,
  } = usePropsContext();

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isSearchBarFocused, setSearchBarFocused] = useState(false);

  const handleLayout = () => {
    setIsLayoutGrid((prevValue) => !prevValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleFocusSearchBar = (e) => {
    setSearchBarFocused(true);
  };

  const handleBlurSearchBar = (e) => {
    setSearchBarFocused(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white h-fit ">
      <div className="flex items-center px-3 py-2 md:border-b md:p-2 justify-evenly">
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
              className={twMerge(
                "flex items-center max-w-[720px] bg-gray-100 md:rounded-lg rounded-full w-full",
                isSearchBarFocused && "bg-white shadow-md"
              )}
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
                  onFocus={handleFocusSearchBar}
                  onBlur={handleBlurSearchBar}
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

        <div className="flex items-center justify-center pl-2 select-none md:pr-1 md:pl-8">
          <button onClick={() => setIsToggleOpen(!isToggleOpen)}>
            <Avatar currentAvatar={user?.avatar} className="w-14" />
          </button>
        </div>
        {isToggleOpen && (
          <ProfileToggle
            className="mt-16 mr-2"
            user={user}
            closeToggle={() => setIsToggleOpen(!isToggleOpen)}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
