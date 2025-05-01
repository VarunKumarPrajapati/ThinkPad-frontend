import React, { useEffect, useRef, useState } from "react";
import {
  MdMenu,
  MdOutlineGridView,
  MdOutlineSettings,
  MdOutlineViewAgenda,
  MdRefresh,
  MdSearch,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { Icon, Logo, Input, Avatar } from "../../common";
import ProfileToggle from "./ProfileToggle/ProfileToggle";

import usePropsContext from "../../../hooks/use-propsContext";
import { useFetchUserQuery } from "../../../store";

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

  const handleLayout = () => {
    setIsLayoutGrid((prevValue) => !prevValue);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
            <div className="flex max-w-[720px] bg-gray-100 md:rounded-lg rounded-full w-full h-full md:focus-within:bg-white md:focus-within:shadow-md">
              {/* Menu Icon Only for Mobile  */}
              <Icon
                ref={sidebarBtnRef}
                icon={MdMenu}
                onClick={() => setIsSidebarExpanded((prevValue) => !prevValue)}
                className="md:hidden"
              />

              <Input
                leftIcon={
                  <Icon
                    icon={MdSearch}
                    plain
                    className="hidden px-4 rounded-full md:inline-block "
                  />
                }
                placeholder="Search"
                onChange={handleChange}
                className="bg-transparent border-0"
                rightIcon={
                  <Icon
                    icon={RxCross2}
                    className="p-2 mx-2.5 hidden md:inline-block h-full "
                    type="reset"
                  />
                }
              />

              <Icon
                onClick={handleLayout}
                icon={isLayoutGrid ? MdOutlineGridView : MdOutlineViewAgenda}
                className="hover:text-black md:hidden"
              />
            </div>
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
