import React from "react";
import { twMerge } from "tailwind-merge";
import Loading from "./Loading";

function Avatar({ currentAvatar, loading, className, ...rest }) {
  const avatar = {
    none: "/img/user.webp",
    luffy: "/img/luffy.webp",
    brook: "/img/brook.webp",
    sanchi: "/img/sanchi.webp",
    zoro: "/img/zoro.webp",
  };

  return (
    <div
      className={twMerge(
        "relative flex items-center justify-center object-fill !leading-0 rounded-full border border-black p-1 cursor-pointer",
        currentAvatar === "none" && "border-none p-0",
        className
      )}
    >
      {loading ? (
        <Loading className="text-black" />
      ) : (
        <img
          src={avatar[currentAvatar || "none"]}
          alt="avatar"
          draggable="false"
          className="object-fill"
          {...rest}
        />
      )}
    </div>
  );
}

export default Avatar;
