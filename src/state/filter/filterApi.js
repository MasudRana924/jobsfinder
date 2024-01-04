import axios from "axios";
import { api } from "../../config/index";
export const getFilterJobs = async (cities, categories, types, times, page) => {
  let queryString = "";
  if (categories?.length > 0) {
    queryString += categories.map((tag) => `category=${tag}`).join("&");
  }
  if (cities?.length > 0) {
    queryString += cities.map((tag) => `&city=${tag}`).join("&");
  }
  if (types?.length > 0) {
    queryString += types.map((tag) => `&type=${tag}`).join("&");
  }
  if (times?.length > 0) {
    queryString += times.map((tag) => `&time=${tag}`).join("&");
  }

  if (page) {
    queryString += `&page=${page}`;
  }

  const response = await axios.get(`${api}/job/get/all/?${queryString}`);
  console.log(response);
  return response.data;
};
