import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./apis/authApi";
import { userApi } from "./apis/userApi";
import { noteApi } from "./apis/noteApi";

import { noteReducer, addNote, setNotes } from "./slices/noteSlice";

export const store = configureStore({
  reducer: {
    // Here are apis
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
    // Here are slices
    notes: noteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(noteApi.middleware),
});

setupListeners(store.dispatch);

// Exporting
export {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "./apis/authApi";
export { useFetchUserQuery, useUpdateUserMutation } from "./apis/userApi";
export { useCreateNoteMutation, useFetchNotesQuery } from "./apis/noteApi";

// Exporting Actions of slices
export { addNote, setNotes };
