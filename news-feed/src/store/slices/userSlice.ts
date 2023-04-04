import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
  isAuth: boolean;
}

interface UserState {
  user: User;
}

const initUser: User = {
  email: "",
  accessToken: "",
  refreshToken: "",
  isAuth: false,
};

const initialState: UserState = {
  user: initUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initUser;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
