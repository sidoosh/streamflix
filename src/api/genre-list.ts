import { axios } from "./axios";
import { API_KEY, BASE_URL } from "../utlis/constants";

export async function getGenreList(entertainmentType: string) {
  const { data } = await axios.get(
    `${BASE_URL}/genre/${entertainmentType}/list?api_key=${API_KEY}`
  );

  return data;
}
