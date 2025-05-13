import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./apis/authApi";
import { userApi } from "./apis/userApi";
import { noteApi } from "./apis/noteApi";

import {
  noteReducer,
  setNotes,
  addNoteOptimistic,
  updateNoteById,
  removeNoteById,
  replaceTempIdWithRealId,
  rollbackNoteOnError,
  setNoteError,
} from "./slices/noteSlice";
import { userReducer, login, logout } from "./slices/userSlice";

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
  useLazyFetchDistinctColorsQuery,
  useFetchDistinctColorsQuery,
} from "./apis/noteApi";

// Exporting Actions of slices
export {
  setNotes,
  addNoteOptimistic,
  updateNoteById,
  removeNoteById,
  replaceTempIdWithRealId,
  rollbackNoteOnError,
  setNoteError,
  login,
  logout,
};
