import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { MdEdit, MdOutlineLogout } from "react-icons/md";

import { Icon, Avatar } from "../../common";
import { BaseToggle } from "../../ui";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

import { useLogoutMutation, logout } from "../../../store";

export default function ProfileToggle({ iconClassName, className }) {
  const { user } = useSelector((state) => state.userState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [logoutUser, { isSuccess, isLoading, isError }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logout());
      navigate("/login");
    }
    if (isError) toast.warning("Something went wrong");
  }, [isSuccess, isError, navigate, dispatch]);

  const icon = (
    <button className={iconClassName}>
      <Avatar currentAvatar={user.avatar} className="size-12" />
    </button>
  );

  return (
    <BaseToggle
      icon={icon}
      className="flex flex-col p-2 bg-gray-100 border shadow-lg font-poppins rounded-xl gap-y-2 w-80"
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
          icon={MdOutlineLogout}
          size="20"
          className="p-1 bg-gray-200 hover:bg-gray-50"
          onClick={() => logoutUser()}
          disabled={isLoading}
        />
      </div>

      <div className="flex flex-col items-center justify-center p-2 bg-white rounded-2xl">
        <div className="mt-4 mb-2 overflow-hidden size-24">
          <Avatar currentAvatar={user.avatar} />
        </div>
        <h1 className="text-xl">Hi, {user.username}</h1>
        <h2 className="text-sm font-semibold">{user.email}</h2>
      </div>

      <UpdateProfile isOpen={isEdit} />
    </BaseToggle>
  );
}
