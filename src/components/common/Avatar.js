import React from "react";
import { twMerge } from "tailwind-merge";

function Avatar({ currentAvatar, className, ...rest }) {
  const avatar = {
    none: "/img/user.jpg",
    luffy: "/img/luffy.png",
    brook: "/img/brook.png",
    sanchi: "/img/sanchi.png",
    zoro: "/img/zoro.png",
  };
  return (
    <img
      src={avatar[currentAvatar || "none"]}
      alt="avatar"
      draggable="false"
      className={twMerge(
        "object-fill !leading-0 rounded-full border border-black p-1 cursor-pointer",
        currentAvatar === "none" && "border-none p-0",
        className
      )}
      {...rest}
    />
  );
}

export default Avatar;
