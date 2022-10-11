import { createSlice } from '@reduxjs/toolkit';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  initialState,
  name: USER_FEATURE_KEY,
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
