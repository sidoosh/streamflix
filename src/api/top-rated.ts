import { axios } from "./axios";
import { TOP_RATED_PATH, API_KEY, BASE_URL } from "../utlis/constants";
export async function getTopRatedEntertainment(
  pageNumber = 1,
  entertainmentType: string,
  genre: number,
  yearFrom: number,
  yearTo: number,
  rating: number
) {
  const { data } = await axios.get(
    `${BASE_URL}/${entertainmentType}/${TOP_RATED_PATH}?api_key=${API_KEY}&page=${pageNumber}&with_genres=&with_runtime.gte=${yearFrom}&with_runtime.lte=${yearTo}`
  );

  return data;
}
