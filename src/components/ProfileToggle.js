import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import GIcon from "./common/GIcon";
import Avatar from "./common/Avatar";
import UpdateProfile from "./UpdateProfile";

function ProfileToggle({ className, user, closeToggle }) {
  const { email, username, avatar } = user;
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      className={twMerge(
        "absolute top-2.5 right-0 z-10 font-poppins rounded-xl shadow-lg border flex flex-col gap-y-2 w-80 bg-gray-100 p-2",
        className
      )}
    >
      <div className="flex items-center justify-end w-full pl-1.5 pt-0.5">
        <div className="w-full font-semibold">User Profile</div>
        <GIcon
          icon="edit"
          clickable
          className="!text-xl p-1 bg-gray-200 hover:bg-gray-50"
          onClick={() => setIsEdit(!isEdit)}
        />
        <GIcon
          icon="close"
          clickable
          className="!text-xl p-1 bg-gray-200 hover:bg-gray-50"
          onClick={closeToggle}
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
}

export default ProfileToggle;
