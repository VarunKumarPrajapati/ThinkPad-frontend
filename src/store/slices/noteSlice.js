import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    userNotes: [],
    noteLoading: false,
  },
  reducers: {
    setNotes(state, action) {
      state.userNotes = action.payload;
    },
    addNote(state, action) {
      state.userNotes.unshift(action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { addNote, setNotes } = noteSlice.actions;
