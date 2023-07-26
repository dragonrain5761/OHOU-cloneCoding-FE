import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("Access") ? true : false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state) {
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
