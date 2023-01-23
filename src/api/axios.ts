import Axios from "axios";
import { BASE_URL } from "../utlis/constants";

export const axios = Axios.create({
  baseURL: BASE_URL,
});
