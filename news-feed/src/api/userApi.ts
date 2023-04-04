import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectUser, setUser } from "@/store/slices/userSlice";
import {
  LoginResponse,
  LogoutResponse,
  RegisterResponse,
} from "@/types/directus";
import axios from "axios";

const API_URL = "http://localhost:8055";
const USER_ROLE = "e193df6d-909e-41ad-8e4a-62833813f0fa";

export async function login(email: string, password: string) {
  return axios.post<LoginResponse>(API_URL + "/auth/login", {
    email,
    password,
  });
}

export async function logout(refreshToken: string) {
  return axios.post<LogoutResponse>(API_URL + "/auth/logout", {
    refresh_token: refreshToken,
  });
}

export async function register(email: string, password: string) {
  return axios.post<RegisterResponse>(API_URL + "/users", {
    email,
    password,
    role: USER_ROLE,
  });
}
