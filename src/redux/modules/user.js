import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logoutUser(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
