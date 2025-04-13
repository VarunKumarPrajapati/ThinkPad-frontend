import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./apis/authApi";
import { userApi } from "./apis/userApi";
import { noteApi } from "./apis/noteApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(userApi.middleware)
      .concat(noteApi.middleware),
});

setupListeners(store.dispatch);

export { useFetchUserQuery, useUpdateUserMutation } from "./apis/userApi";

export {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
} from "./apis/authApi";

export { useCreateNoteMutation, useFetchNotesQuery } from "./apis/noteApi";
