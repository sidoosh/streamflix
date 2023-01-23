import { axios } from "./axios";
import {
  NEWEST_PATH_MOVIE,
  NEWEST_PATH_TV,
  API_KEY,
  BASE_URL,
  Type,
} from "../utlis/constants";
export async function getNewestEntertainment(
  pageNumber = 1,
  entertainmentType: string,
  genre: number,
  yearFrom: number,
  yearTo: number,
  rating: number
) {
  let res;
  if (entertainmentType === Type.TV) {
    res = await axios.get(
      `${BASE_URL}/${entertainmentType}/${NEWEST_PATH_TV}?api_key=${API_KEY}&page=${pageNumber}&with_genres=&with_runtime.gte=${yearFrom}&with_runtime.lte=${yearTo}`
    );
  } else {
    res = await axios.get(
      `${BASE_URL}/${entertainmentType}/${NEWEST_PATH_MOVIE}?api_key=${API_KEY}&page=${pageNumber}&with_genres=&with_runtime.gte=${yearFrom}&with_runtime.lte=${yearTo}`
    );
  }

  return res.data;
}
