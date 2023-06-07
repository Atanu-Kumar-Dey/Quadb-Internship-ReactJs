import axios from "axios";

const API_ENDPOINT = "https://api.tvmaze.com/search/shows?q=all";

export const fetchDataFromApi = async() => {
    try {
        const { data } = await axios.get(API_ENDPOINT);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};