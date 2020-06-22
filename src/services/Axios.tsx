import axios, { AxiosInstance } from 'axios';

const bearer = (token: string) : any => {
    return {
        Authorization: `Bearer ${token}`
    };
}

const access_config = {
    baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public',
    timeout: 10000,
    headers: {}
};

const register_config = {
    baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public/register/json',
    timeout: 10000,
    headers: {
        'Content-Type' : 'application/json'
    }
};

const todo_config = {
    baseURL: 'http://localhost:8000/api/todo',
    timeout: 10000,
    headers: {}
}

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
    },
    register: () : AxiosInstance => {
        let config = register_config;

        return axios.create(config);
    },
    logout: (token: string) : AxiosInstance => {
        let config = access_config;
        config.headers = bearer(token);
        return axios.create(config);
    },
    todo: (token: string) : AxiosInstance => {
        let config = todo_config;
        config.headers = bearer(token);
        return axios.create(config);
    }
};

export default Axios;