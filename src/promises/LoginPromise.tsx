import axios from 'axios';
import { Promise as PromiseInterface } from "../types/Promise";
import { Credentials } from "../types/Credentials";
import { LoginEndPointResponse } from "../types/LoginEndpointResponse";
import LoginFinalPromise from './LoginFinalPromise';

const LoginPromise = {
    create: (payload: Credentials) : Promise<any> => {
        const instance : any = axios.create({
            baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public/',
            timeout: 3000
        });

        return instance.post('token/json', JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json' 
            }
        });
    },

    resolve: (response: any) : LoginEndPointResponse => {
        return {
            token: response.data.data.token,
            errors: []
        };
    },

    reject: (error: any) : LoginEndPointResponse => {
        return {
            token: null,
            errors: error.response.data.errors
        };
    },

    next: LoginFinalPromise
} as PromiseInterface<Credentials,LoginEndPointResponse>;

export default LoginPromise;