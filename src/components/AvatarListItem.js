import React from "react";
import { twMerge } from "tailwind-merge";

import GIcon from "./common/GIcon";
import Loading from "./common/Loading";

function AvatarListItem({
  selectedAvatar,
  setSelectedAvatar,
  className,
  avatar,
  onClick,
  loading,
}) {
  const handleSelectAvatar = () => {
    setSelectedAvatar(avatar.name);
    onClick();
  };

  return (
    <span className="relative cursor-pointer" onClick={handleSelectAvatar}>
      <img
        src={avatar.url}
        alt={avatar.name}
        className={twMerge("", className)}
      />
      {selectedAvatar === avatar.name && (
        <span className="inset-0 p-0.5 absolute rounded-full flex items-center justify-center bg-transparent-1">
          {loading ? (
            <Loading className="text-white" />
          ) : (
            <GIcon icon="check" className="!text-white" />
          )}
        </span>
      )}
    </span>
  );
}

export default AvatarListItem;
