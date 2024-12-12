import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  MdMenu,
  MdOutlineGridView,
  MdOutlineSettings,
  MdOutlineViewAgenda,
  MdRefresh,
  MdSearch,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import Icon from "./common/Icon";
import Logo from "./common/Logo";
import Input from "./common/Input";
import Avatar from "./common/Avatar";
import ProfileToggle from "./ProfileToggle";

import usePropsContext from "../hooks/use-propsContext";
import { useFetchUserQuery } from "../store";

function Navbar() {
  const toggleButton = useRef(null);
  const sidebarBtnRef = useRef(null);

  const {
    setIsSidebarExpanded,
    isLayoutGrid,
    setIsLayoutGrid,

    setSidebarBtnRef,
  } = usePropsContext();

  const { data: user, isLoading } = useFetchUserQuery();
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

  useEffect(() => {
    setSidebarBtnRef(sidebarBtnRef);
  }, [setSidebarBtnRef]);

  return (
    <header className="w-full bg-white">
      <div className="flex items-center px-3 py-2 md:border-b md:p-2 justify-evenly">
        {/* Logo and Icon only for Desktop */}
        <div className="items-center hidden pr-7 md:flex">
          <Icon
            icon={MdMenu}
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
                <Icon icon={MdSearch} plain className="px-4 rounded-full" />
              </div>

              {/* Menu Icon Only for Mobile  */}
              <Icon
                ref={sidebarBtnRef}
                icon={MdMenu}
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

              <Icon
                onClick={handleLayout}
                icon={isLayoutGrid ? MdOutlineGridView : MdOutlineViewAgenda}
                className="hover:text-black md:hidden"
              />

              <div className="hidden md:inline-block">
                <Icon icon={RxCross2} className="p-2 mx-2.5" type="reset" />
              </div>
            </form>
          </div>

          <div className="hidden md:flex">
            <Icon icon={MdRefresh} className=" hover:text-black" />
            <Icon
              onClick={handleLayout}
              icon={isLayoutGrid ? MdOutlineGridView : MdOutlineViewAgenda}
              className="hover:text-black"
            />
            <Icon icon={MdOutlineSettings} className="hover:text-black" />
          </div>
        </div>

        <div className="flex items-center justify-center pl-2 select-none md:pr-1 md:pl-8">
          <button
            ref={toggleButton}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
          >
            <Avatar
              loading={isLoading}
              currentAvatar={user?.avatar}
              className="size-12"
            />
          </button>
        </div>

        {isToggleOpen && (
          <ProfileToggle
            ref={toggleButton}
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
