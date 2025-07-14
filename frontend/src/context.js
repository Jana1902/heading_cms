import { create } from "zustand";
import { axiosInstance } from "./lib/axios";

export const headingContext = create((set) => ({
  heading: null,
  getHeading: async () => {
    try {
      const res = await axiosInstance.get("/heading");
      set({ heading: res.data.text });
    } catch (error) {
      console.log("Error in getting heading ", error);
    }
  },
  updateHeading: async (data) => {
    try {
      const res = await axiosInstance.post("/update-heading", data);
      console.log(res.data);
    } catch (error) {
      console.log("Error in updating heading ", error);
    }
  },
}));
