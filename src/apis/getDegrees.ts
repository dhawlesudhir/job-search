import axios from "axios";
import type { Degree } from "@/apis/types";

const getDegreeTypes = async () => {
  const baseURL = import.meta.env.VITE_APP_API_URL;
  const url = `${baseURL}/jobs`;
  const response = await axios.get<Degree[]>(url);
  return response.data;
};

export default getDegreeTypes;
