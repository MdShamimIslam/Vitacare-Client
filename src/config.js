import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const token = localStorage.getItem("token");

export const axiosSecure = axios.create({
    // TODO
    baseURL: "http://localhost:5000/api/v1",
  });