import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";
import { logIn } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
    builder
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(logIn.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
