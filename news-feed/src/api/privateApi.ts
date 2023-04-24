import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import { API_URL, DATABASE_PORT } from "@/constants/constants";
import store from "@/store/store";
import { refreshAccessToken } from "./userApi";
import {
  clearUser,
  setUserAccessToken,
  setUserRefreshToken,
} from "@/store/slices/userSlice";

function getAccessToken() {
  return store.getState().user.user.accessToken;
}

const privateApi = axios.create({
  baseURL: API_URL + DATABASE_PORT,
  headers: {
    "Content-Type": "application/json",
  },
});

privateApi.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

privateApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const requestConfig = error.config as AxiosRequestConfig & {
      retryCount?: number;
    };

    if (!requestConfig) return Promise.reject(error);
    if (
      error.response?.status === 401 &&
      requestConfig.retryCount === undefined
    ) {
      requestConfig.retryCount = 0;

      try {
        const response = await refreshAccessToken();

        if (response.error !== "") {
          store.dispatch(clearUser());
          return;
        }

        store.dispatch(setUserAccessToken(response.access_token));
        store.dispatch(setUserRefreshToken(response.refresh_token));

        if (requestConfig.headers) {
          requestConfig.headers[
            "Authorization"
          ] = `Bearer ${response.access_token}`;
        } else {
          requestConfig.headers = {
            Authorization: `Bearer ${response.access_token}`,
          };
        }

        return privateApi(requestConfig);
      } catch (error) {}
    }

    if (requestConfig.retryCount === 1) {
      requestConfig.retryCount = undefined;
    } else {
      requestConfig.retryCount = 1;
      return privateApi(requestConfig);
    }

    return Promise.reject(error);
  }
);

export default privateApi;
