import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

import { MdEdit, MdOutlineLogout } from "react-icons/md";

import { Icon, Avatar } from "../../common";
import { BaseToggle } from "../../ui";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

import { useLogoutMutation } from "../../../store";

export default function ProfileToggle({ className, user }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [logout, { isSuccess, isLoading, isError }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/login");
    if (isError) toast.warning("Something went wrong");
  }, [isSuccess, isError, navigate]);

  const icon = (
    <button>
      <Avatar currentAvatar={user?.avatar} className="size-12" />
    </button>
  );

  return (
    <BaseToggle icon={icon}>
      <div
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
            icon={MdOutlineLogout}
            size="20"
            className="p-1 bg-gray-200 hover:bg-gray-50"
            onClick={() => logout()}
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

        {isEdit && <UpdateProfile />}
      </div>
    </BaseToggle>
  );
}
