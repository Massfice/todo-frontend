import axios, { AxiosInstance } from 'axios';

const bearer = (token: string) : any => {
    return {
        Authorization: `Bearer ${token}`
    };
}

const access_config = {
    baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public/token/json',
    timeout: 10000,
    headers: {}
};

const Axios = {
    token: (token: string) : AxiosInstance => {
        let config = access_config;
        config.headers = bearer(token);
        return axios.create(config)
    },
    login: () : AxiosInstance => {
        let config = access_config;
        config.headers = {
            'Content-Type' : 'application/json'
        };
        return axios.create(config);
    }
};

export default Axios;