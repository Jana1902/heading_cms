import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://headingcms-production.up.railway.app/",
});
