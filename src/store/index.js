import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./apis/authApi";
import { userApi } from "./apis/userApi";
import { noteApi } from "./apis/noteApi";

import {
  noteReducer,
  addNoteLocal,
  setNotes,
  updateNoteLocal,
  deleteNoteLocal,
} from "./slices/noteSlice";
import { userReducer, setUser, setAuthenticated } from "./slices/userSlice";

import notesSyncMiddleware from "./middleware/notesSync";

export const store = configureStore({
  reducer: {
    // Here are apis
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
    // Here are slices
    notes: noteReducer,
    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(noteApi.middleware, notesSyncMiddleware),
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
export {
  useCreateNoteMutation,
  useFetchNotesQuery,
  useUpdateNoteMutation,
} from "./apis/noteApi";

// Exporting Actions of slices
export {
  addNoteLocal,
  setNotes,
  updateNoteLocal,
  deleteNoteLocal,
  setUser,
  setAuthenticated,
};
