import React, { useEffect, forwardRef, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdEdit, MdOutlineLogout } from "react-icons/md";

import { Icon, Avatar } from "../../../common";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

import { useLogoutMutation } from "../../../../store";

const ProfileToggle = forwardRef(({ className, user, closeToggle }, ref) => {
  const navigate = useNavigate();
  const toggle = useRef(null);
  const { email, username, avatar } = user;
  const [isEdit, setIsEdit] = useState(false);
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleCloseToggle = (e) => {
      if (
        toggle.current &&
        !toggle.current.contains(e.target) &&
        !ref.current.contains(e.target)
      ) {
        closeToggle();
      }
    };

    document.addEventListener("click", handleCloseToggle);

    return () => {
      document.removeEventListener("click", handleCloseToggle);
    };
  }, [closeToggle, ref]);

  return (
    <div
      ref={toggle}
      className={twMerge(
        "absolute top-2.5 right-0 z-50 font-poppins rounded-xl shadow-lg border flex flex-col gap-y-2 w-80 bg-gray-100 p-2",
        className
      )}
    >
      <div className="flex items-center justify-end w-full pl-1.5 pt-0.5">
        <div className="w-full font-semibold">User Profile</div>
        <Icon
          icon={MdEdit}
          size="20"
          className="p-1 bg-gray-200 hover:bg-gray-50"
          onClick={() => setIsEdit(!isEdit)}
        />

        <Icon
          icon={RxCross2}
          size="20"
          className="p-1 bg-gray-200 hover:bg-gray-50"
          onClick={closeToggle}
        />

        <Icon
          icon={MdOutlineLogout}
          size="20"
          className="p-1 bg-gray-200 hover:bg-gray-50"
          onClick={handleLogout}
        />
      </div>

      <div className="flex flex-col items-center justify-center p-2 bg-white rounded-2xl">
        <div className="mt-4 mb-2 overflow-hidden size-24">
          <Avatar currentAvatar={avatar} />
        </div>
        <h1 className="text-xl">Hi, {username}</h1>
        <h2 className="text-sm font-semibold">{email}</h2>
      </div>

      {isEdit && <UpdateProfile />}
    </div>
  );
});
export default ProfileToggle;
