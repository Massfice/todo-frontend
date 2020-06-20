import { Promise as PromiseInterface } from "../types/Promise";
import { LoginEndPointResponse } from "../types/LoginEndpointResponse";
import { LoginFinalResponse } from "../types/LoginFinalResponse";
import axios from "axios";

const LoginFinalPromise = {
    create: (payload: LoginEndPointResponse) : Promise<any> => {
        if(payload.token === null) {
            return new Promise((resolve, reject) => {
                reject(false)
            });
        }

        let token = payload.token;
        const headers = { Authorization: `Bearer ${token}` };
        const instance : any = axios.create({
            baseURL: 'http://localhost/--%20DIPLOMA%20--/meet-your-elf-auth/public/',
            timeout: 3000,
            headers: headers
        });
        return instance.get('token/json');
    },

    resolve: (response: any, previous: any) : LoginFinalResponse => {
        return {
            endpoint: previous,
            user: {
                name: response.data.data.name,
                surname: response.data.data.surname,
                email: response.data.data.email
            }
        } as LoginFinalResponse;
    },

    // eslint-disable-next-line
    reject: (error: any, previous: any) : LoginFinalResponse => {
        return {
            endpoint: previous,
            user: null
        } as LoginFinalResponse;
    },

    next: null
} as PromiseInterface<LoginEndPointResponse,LoginFinalResponse>;

export default LoginFinalPromise;