import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userState",
  initialState: {
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout(state, action) {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
