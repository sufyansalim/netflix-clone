import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3"
const instance = config =>{
    config = {...config, url: `${baseUrl}${config.url}`};
    return axios(config);
};

export default instance;