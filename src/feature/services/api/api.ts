import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = "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";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
