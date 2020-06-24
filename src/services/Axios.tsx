import axios, { AxiosInstance } from 'axios';
import { AUTH_ENDPOINT, TODO_ENDPOINT } from '../types/constants';

const bearer = (token: string) : any => {
    return {
        Authorization: `Bearer ${token}`
    };
}

const access_config = {
    // baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public',
    baseURL: AUTH_ENDPOINT,
    timeout: 30000,
    headers: {}
};

const register_config = {
    baseURL: AUTH_ENDPOINT + '/register/json',
    timeout: 30000,
    headers: {
        'Content-Type' : 'application/json'
    }
};

const todo_config = {
    baseURL: TODO_ENDPOINT,
    timeout: 30000,
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
    todo: (token: string, headers: any = {}) : AxiosInstance => {
        let config = todo_config;
        config.headers = {
            ...bearer(token),
            ...headers
        };
        return axios.create(config);
    }
};

export default Axios;