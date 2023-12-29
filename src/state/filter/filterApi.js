import axios from "axios";
import { api } from "../../config/index";
export const getFilterJobs = async (cities,categories) => {
    let queryString = '';
    if (categories?.length > 0) {
        queryString += categories.map(tag => `category=${tag}`).join("&");
    }
    if (cities?.length > 0) {
        queryString += cities.map(tag => `&city=${tag}`).join("&");
    }


    // if (search !== '') {
    //     queryString += `&q=${search}`;
    // }
    const response = await axios.get(`${api}/job/get/all/?${queryString}`);
    console.log(response);
    return response.data;
}