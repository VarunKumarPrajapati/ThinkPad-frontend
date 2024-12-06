import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from "./apis/userApi";
import { noteApi } from "./apis/noteApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(noteApi.middleware),
});

setupListeners(store.dispatch);

export {
  useFetchUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useUpdateUserMutation,
} from "./apis/userApi";

export { useCreateNoteMutation, useFetchNotesQuery } from "./apis/noteApi";
