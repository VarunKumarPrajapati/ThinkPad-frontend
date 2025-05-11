import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import {
  MdMenu,
  // MdOutlineGridView,
  // MdOutlineViewAgenda,
  MdRefresh,
  MdSearch,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { Icon, Logo, Input } from "../common";
import ProfileToggle from "../Toggles/ProfileToggle/ProfileToggle";

import usePropsContext from "../../hooks/use-propsContext";
import { twMerge } from "tailwind-merge";

function Navbar() {
  const sidebarBtnRef = useRef(null);
  const noteLoading = useSelector((s) => s.notes.loading);
  const {
    setIsSidebarExpanded,
    // isLayoutGrid,
    // setIsLayoutGrid,

    setSidebarBtnRef,
  } = usePropsContext();

  const user = useSelector((state) => state.userState.user);

  // const handleLayout = () => {
  //   setIsLayoutGrid((prevValue) => !prevValue);
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    setSidebarBtnRef(sidebarBtnRef);
  }, [setSidebarBtnRef]);

  return (
    <nav className="font-poppins">
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

              {/* <Icon
                onClick={handleLayout}
                icon={isLayoutGrid ? MdOutlineGridView : MdOutlineViewAgenda}
                className="hover:text-black md:hidden"
              /> */}

              <Icon
                icon={MdRefresh}
                className={twMerge(
                  "hover:text-black md:hidden hover:bg-transparent",
                  noteLoading && "animate-spin"
                )}
              />
            </div>
          </div>

          <div className="hidden md:flex">
            <Icon
              icon={MdRefresh}
              className={twMerge(
                "hover:text-black",
                noteLoading && "animate-spin"
              )}
            />
            {/* <Icon
              onClick={handleLayout}
              icon={isLayoutGrid ? MdOutlineGridView : MdOutlineViewAgenda}
              className="hover:text-black"
            /> */}
          </div>
        </div>
        <div className="relative flex items-center justify-center pl-2 select-none md:pr-1 md:pl-8">
          <ProfileToggle className="mt-4" user={user} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
