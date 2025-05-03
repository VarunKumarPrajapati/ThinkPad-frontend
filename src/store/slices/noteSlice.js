import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    setNotes(state, action) {
      return action.payload;
    },
    addNote(state, action) {
      state.push(action);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { addNote, setNotes } = noteSlice.actions;
