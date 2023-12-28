import axios from "axios";
import { api } from "../../config/index";
export const getFilterJobs = async (cities,categories) => {
    let queryString = '';
    if (cities?.length > 0) {
        queryString += cities.map(tag => `city=${tag}`).join("&");
    }
    if (categories?.length > 0) {
        queryString += categories.map(cat => `category=${cat}`).join("&");
    }

    // if (search !== '') {
    //     queryString += `&q=${search}`;
    // }
    const response = await axios.get(`${api}/job/get/all/?${queryString}`);
    return response.data;
}