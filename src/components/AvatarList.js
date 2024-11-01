import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import AvatarListItem from "./AvatarListItem";

import { useFetchUserQuery, useUpdateUserMutation } from "../store";

function AvatarList() {
  const { data } = useFetchUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const [selectedAvatar, setSelectedAvatar] = useState(data.avatar);

  const avatarList = [
    { name: "luffy", url: "/img/luffy.png" },
    { name: "zoro", url: "/img/zoro.png" },
    { name: "sanchi", url: "/img/sanchi.png" },
    { name: "brook", url: "/img/brook.png" },
    { name: "none", url: "/img/user.jpg" },
  ];

  const renderAvatarList = avatarList.map((avatar, key) => {
    const classes = twMerge(
      "w-12 p-0.5 border-black border rounded-full bg-white",
      avatar.name === "none" && "p-0 border-none"
    );
    return (
      <AvatarListItem
        key={key}
        avatar={avatar}
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
        className={classes}
        onClick={() => updateUser({ avatar: avatar.name })}
      />
    );
  });

  return (
    <div className="flex items-center p-2 bg-white rounded-2xl justify-evenly gap-x-3">
      {renderAvatarList}
    </div>
  );
}

export default AvatarList;
