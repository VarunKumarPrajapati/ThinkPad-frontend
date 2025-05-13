import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { noteApi } from "../apis/noteApi";
import { findIndexById } from "../../utils/arrayUtils";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    localNotes: [],
    loading: false,
    error: false,
  },
  reducers: {
    setNotes(state, action) {
      state.localNotes = action.payload;
    },
    addNoteOptimistic(state, action) {
      state.localNotes.unshift(action.payload);
    },
    updateNoteById(state, action) {
      const { _id, syncFlag, ...payload } = action.payload;
      const index = findIndexById(state.localNotes, _id);
      const note = state.localNotes[index];
      if (index !== -1) state.localNotes[index] = { ...note, ...payload };
    },
    removeNoteById(state, action) {
      const _id = action.payload;
      const index = findIndexById(state.localNotes, _id);
      if (index !== -1) state.localNotes.splice(index, 1);
    },
    replaceTempIdWithRealId(state, action) {
      const { tempId, _id } = action.payload;
      const index = findIndexById(state.localNotes, tempId);
      const note = state.localNotes[index];
      if (index !== -1) state.localNotes[index] = { ...note, _id };
    },
    rollbackNoteOnError(state, action) {
      const _id = action.payload;
      const index = findIndexById(state.localNotes, _id);
      if (index !== -1) state.localNotes.splice(index, 1);
    },
    setNoteError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          noteApi.endpoints.createNote.matchPending,
          noteApi.endpoints.updateNote.matchPending,
          noteApi.endpoints.deleteNote.matchPending,
          noteApi.endpoints.fetchNotes.matchPending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          noteApi.endpoints.createNote.matchFulfilled,
          noteApi.endpoints.updateNote.matchFulfilled,
          noteApi.endpoints.deleteNote.matchFulfilled,
          noteApi.endpoints.fetchNotes.matchFulfilled
        ),
        (state, action) => {
          state.loading = false;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          noteApi.endpoints.createNote.matchRejected,
          noteApi.endpoints.updateNote.matchRejected,
          noteApi.endpoints.deleteNote.matchRejected,
          noteApi.endpoints.fetchNotes.matchRejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const noteReducer = noteSlice.reducer;
export const {
  setNotes,
  addNoteOptimistic,
  updateNoteById,
  removeNoteById,
  replaceTempIdWithRealId,
  rollbackNoteOnError,
  setNoteError,
} = noteSlice.actions;
