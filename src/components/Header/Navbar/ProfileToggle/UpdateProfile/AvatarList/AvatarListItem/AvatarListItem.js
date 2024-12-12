import React from "react";
import { twMerge } from "tailwind-merge";
import { MdCheck } from "react-icons/md";

import { Loading, Icon } from "../../../../../../common";

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
            <Icon plain icon={MdCheck} className="!text-white" />
          )}
        </span>
      )}
    </span>
  );
}

export default AvatarListItem;
