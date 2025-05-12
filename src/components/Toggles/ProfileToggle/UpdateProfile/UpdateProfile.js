import { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineCheck } from "react-icons/md";

import { Icon, Loading } from "../../../common";
import AvatarList from "./AvatarList/AvatarList";

import { useUpdateUserMutation } from "../../../../store";

function UpdateProfile({ isOpen }) {
  const data = useSelector((state) => state.userState.user);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [username, setUsername] = useState(data?.username);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(data.username === username)) {
      updateUser({ username });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <AvatarList />

      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center w-full p-2 bg-white rounded-2xl"
      >
        <input
          autoFocus
          value={username}
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-2 py-1 focus:outline-none"
        />

        {isLoading ? (
          <Loading />
        ) : (
          <Icon
            plain
            type="submit"
            icon={MdOutlineCheck}
            className="text-black rounded-md text-inherit hover:text-white hover:bg-blue-600"
          />
        )}
      </form>
    </>
  );
}

export default UpdateProfile;
