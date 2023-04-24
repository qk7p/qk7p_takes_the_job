import { API_URL, DATABASE_PORT } from "@/constants/constants";
import axios from "axios";

const publicApi = axios.create({
  baseURL: API_URL + DATABASE_PORT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicApi;
