import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
  nickname: string;
  name: string;
  isAuth: boolean;
}

interface UserState {
  user: User;
}

const initUser: User = {
  email: "",
  accessToken: "",
  refreshToken: "",
  nickname: "",
  name: "",
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
    setUserAccessToken: (state, action: PayloadAction<string>) => {
      state.user.accessToken = action.payload;
    },
    setUserAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
  },
});

export const { setUser, clearUser, setUserAccessToken, setUserAuth } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
