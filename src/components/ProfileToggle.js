import React from "react";
import { twMerge } from "tailwind-merge";
import Avatar from "./common/Avatar";

function ProfileToggle({ className, user }) {
  const { email, username, avatar } = user;
  return (
    <div
      className={twMerge(
        "absolute top-0 right-0 z-10 bg-blue-200 rounded-xl px-5 py-2 font-poppins ",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <h2 className="text-sm font-semibold">{email}</h2>
        </div>
        <div className="mt-4 mb-2 overflow-hidden bg-white border-2 rounded-full size-24">
          <Avatar currentAvatar={avatar} />
        </div>
        <h1 className="text-xl">Hi, {username}</h1>
      </div>
    </div>
  );
}

export default ProfileToggle;
