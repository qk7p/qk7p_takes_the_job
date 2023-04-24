import { API_URL, DATABASE_PORT } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setUserAccessToken,
  setUserAuth,
  setUserRefreshToken,
} from "@/store/slices/userSlice";
import store from "@/store/store";
import {
  DirectusRefreshResponse,
  LoginResponse,
  LogoutResponse,
  RefreshResponse,
  RegisterResponse,
} from "@/types/directus";

import axios from "axios";
import privateApi from "./privateApi";
import publicApi from "./publicApi";

const USER_ROLE = "e193df6d-909e-41ad-8e4a-62833813f0fa";

export async function login(email: string, password: string) {
  return publicApi.post<LoginResponse>(
    API_URL + DATABASE_PORT + "/auth/login",
    {
      email,
      password,
    }
  );
}

export async function logout() {
  const refreshToken = store.getState().user.user.refreshToken;
  return privateApi.post<LogoutResponse>(
    API_URL + DATABASE_PORT + "/auth/logout",
    {
      refresh_token: refreshToken,
    }
  );
}

export async function register(email: string, password: string) {
  return publicApi.post<RegisterResponse>(API_URL + DATABASE_PORT + "/users", {
    email,
    password,
    role: USER_ROLE,
  });
}

export async function getUser() {
  return privateApi.get("/users/me");
}

export async function editUser(key: string, value: string) {
  return privateApi.patch("/users/me", {
    [key]: value,
  });
}

export async function refreshAccessToken(): Promise<RefreshResponse> {
  const refreshToken = store.getState().user.user.refreshToken;
  let response = await axios
    .post<DirectusRefreshResponse>(API_URL + DATABASE_PORT + "/auth/refresh", {
      refresh_token: refreshToken,
    })
    .then((response) => {
      return {
        access_token: response.data.data.access_token,
        refresh_token: response.data.data.refresh_token,
        error: "",
      };
    })
    .catch((error) => {
      return {
        access_token: "",
        refresh_token: "",
        error: error,
      };
    });

  return response;
}
