import React, { useState } from "react";

import AvatarList from "./AvatarList";
import Loading from "./common/Loading";

import { useFetchUserQuery, useUpdateUserMutation } from "../store";

function UpdateProfile() {
  const { data } = useFetchUserQuery();
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
          <button
            type="submit"
            className="flex items-center justify-center text-black rounded-md hover:text-white hover:bg-blue-600"
          >
            <span className="w-full material-symbols-outlined">check</span>
          </button>
        )}
      </form>
    </>
  );
}

export default UpdateProfile;
