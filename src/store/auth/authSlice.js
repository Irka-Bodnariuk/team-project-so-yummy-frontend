import { createSlice } from '@reduxjs/toolkit';

import {
  registrationUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUserProfile,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registrationUser.pending, state => state)
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(loginUser.pending, state => state)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.avatar = action.payload.user.avatarURL;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(logoutUser.pending, state => state)
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.avatar = action.payload.avatarURL;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload.message;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
      })
      .addCase(updateUserProfile.pending, state => state)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user.avatar = action.payload.avatarURL;
        state.user.name = action.payload.name;

        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload.message;
      }),
});

export const authReducer = userSlice.reducer;
