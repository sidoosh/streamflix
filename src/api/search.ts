import { axios } from "./axios";
import { SEARCH_PATH, API_KEY, BASE_URL } from "../utlis/constants";
export async function searchEntertainment(
  pageNumber = 1,
  entertainmentType: string
) {
  const { data } = await axios.get(
    `${BASE_URL}/${SEARCH_PATH}/${entertainmentType}?api_key=${API_KEY}&page=${pageNumber}`
  );
  console.log(data);
  return data;
}
