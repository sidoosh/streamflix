import { axios } from "./axios";
import {
  TRENDING_PATH,
  API_KEY,
  BASE_URL,
  TRENDING_TIME_WINDOW,
} from "../utlis/constants";
export async function getTrendingEntertainment(
  pageNumber = 1,
  entertainmentType: string,
  genre: number,
  yearFrom: number,
  yearTo: number,
  rating: number
) {
  const { data } = await axios.get(
    `${BASE_URL}/${TRENDING_PATH}/${entertainmentType}/${TRENDING_TIME_WINDOW}?api_key=${API_KEY}&page=${pageNumber}&with_genres=&with_runtime.gte=${yearFrom}&with_runtime.lte=${yearTo}`
  );

  return data;
}
