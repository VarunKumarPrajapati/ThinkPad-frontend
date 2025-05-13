import React from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdSearch, MdMenu } from "react-icons/md";

import { Icon } from "../../common";

import { usePropsContext } from "../../../hooks";

export default function Search() {
  const navigate = useNavigate();
  const sidebarBtnRef = React.useRef(null);

  const { setIsSidebarExpanded, setSidebarBtnRef, search, setSearch } =
    usePropsContext();

  const handleChange = (e) => {
    setSearch((prev) => ({ ...prev, query: e.target.value }));
  };

  const handleFocus = () => {
    navigate("/search");
  };

  const handleBlur = () => {
    navigate("/");
    setSearch({ query: null, color: null });
  };

  React.useEffect(() => {
    setSidebarBtnRef(sidebarBtnRef);
  }, [setSidebarBtnRef]);

  return (
    <div className="md:focus-within:shadow-input md:px-2.5 md:py-1 flex max-w-[720px] bg-gray-100 md:rounded-lg rounded-full w-full h-full md:focus-within:bg-white">
      <Icon
        ref={sidebarBtnRef}
        icon={MdMenu}
        onClick={() => setIsSidebarExpanded((prevValue) => !prevValue)}
        className="md:hidden"
      />
      <Icon
        plain
        icon={MdSearch}
        className="hidden px-4 rounded-full md:inline-block "
      />
      <input
        className="flex-1 w-full bg-transparent focus:outline-none pee"
        placeholder={
          search.color ? `Search within "${search.color}"` : "Search"
        }
        value={search.query || ""}
        onChange={handleChange}
        onFocus={handleFocus}
      />

      <Icon
        icon={RxCross2}
        className="md:p-2 md:mx-2.5 h-full"
        type="reset"
        onClick={handleBlur}
      />
    </div>
  );
}
