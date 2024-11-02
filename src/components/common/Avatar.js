import React from "react";
import { twMerge } from "tailwind-merge";

function Avatar({ currentAvatar, className, ...rest }) {
  const avatar = {
    none: "/img/user.webp",
    luffy: "/img/luffy.webp",
    brook: "/img/brook.webp",
    sanchi: "/img/sanchi.webp",
    zoro: "/img/zoro.webp",
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
