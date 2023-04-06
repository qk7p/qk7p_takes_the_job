import { API_URL, DATABASE_PORT } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  selectUser,
  setUser,
  setUserAccessToken,
  setUserAuth,
} from "@/store/slices/userSlice";
import store from "@/store/store";
import {
  LoginResponse,
  LogoutResponse,
  RegisterResponse,
} from "@/types/directus";

import axios from "axios";

const USER_ROLE = "e193df6d-909e-41ad-8e4a-62833813f0fa";

createAxiosResponseInterceptor();

export async function login(email: string, password: string) {
  return axios.post<LoginResponse>(API_URL + DATABASE_PORT + "/auth/login", {
    email,
    password,
  });
}

export async function logout(refreshToken: string) {
  return axios.post<LogoutResponse>(API_URL + DATABASE_PORT + "/auth/logout", {
    refresh_token: refreshToken,
  });
}

export async function register(email: string, password: string) {
  return axios.post<RegisterResponse>(API_URL + DATABASE_PORT + "/users", {
    email,
    password,
    role: USER_ROLE,
  });
}

export async function getMe() {
  const accessToken = store.getState().user.user.accessToken;
  return axios.get(API_URL + DATABASE_PORT + "/users/me", {
    headers: { Authorization: "Bearer " + accessToken },
  });
}

export async function editMe(key: string, value: string, accessToken: string) {
  return axios.patch(
    API_URL + DATABASE_PORT + "/users/me",
    {
      [key]: value,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
}

export async function refreshAccessToken(refreshToken: string) {
  return axios
    .post(API_URL + DATABASE_PORT + "/auth/refresh", {
      refresh_token: refreshToken,
    })
    .then((response) => {
      console.log(response);
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function createAxiosResponseInterceptor() {
  const interceptor = axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      axios.interceptors.response.eject(interceptor);

      return axios
        .post(API_URL + DATABASE_PORT + "/auth/refresh", {
          refresh_token: store.getState().user.user.refreshToken,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setUserAccessToken(response.data.access_token));
          error.response.config.headers["Authorization"] =
            "Bearer " + response.data.access_token;

          return axios(error.response.config);
        })
        .catch((error2) => {
          store.dispatch(setUserAuth(false));
          return Promise.reject(error2);
        })
        .finally(createAxiosResponseInterceptor);
    }
  );
}
