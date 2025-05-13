import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

import { MdRefresh, MdMenu } from "react-icons/md";

import Search from "./Search";
import { Icon, Logo } from "../../common";
import { ProfileToggle } from "../../Toggles";

function Navbar() {
  const { loading } = useSelector((s) => s.notes);

  return (
    <nav className="font-poppins">
      <div className="flex items-center px-3 py-2 md:border-b md:p-2 justify-evenly">
        {/* Logo and Icon only for Desktop */}
        <div className="items-center hidden pr-7 md:flex">
          <Icon icon={MdMenu} />
          <Logo />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-full md:pl-3 md:pr-8">
            <Search />
          </div>

          <Icon
            icon={MdRefresh}
            className={twMerge(
              "hover:text-black hidden md:flex",
              loading && "animate-spin"
            )}
          />
        </div>
        <ProfileToggle iconClassName="select-none pl-2 md:pr-1 md:pl-8" />
      </div>
    </nav>
  );
}

export default Navbar;
