import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userState",
  initialState: {
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, setAuthenticated } = userSlice.actions;
