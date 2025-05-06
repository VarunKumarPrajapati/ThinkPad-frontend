import { createSlice } from "@reduxjs/toolkit";
import { findIndexById } from "../../utils/arrayUtils";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    localNotes: [],
    loading: false,
  },
  reducers: {
    setNotes(state, action) {
      state.localNotes = action.payload;
    },
    addNoteLocal(state, action) {
      state.localNotes.unshift(action.payload);
    },
    updateNoteLocal(state, action) {
      const { _id, ...data } = action.payload;
      const index = findIndexById(state.localNotes, _id);
      const note = state.localNotes[index];
      if (index !== -1) state.localNotes[index] = { ...note, ...data };
    },
    deleteNoteLocal(state, action) {
      const _id = action.payload;
      const index = findIndexById(state.localNotes, _id);
      if (index !== -1) state.localNotes.splice(index, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { setNotes, addNoteLocal, updateNoteLocal, deleteNoteLocal } =
  noteSlice.actions;
