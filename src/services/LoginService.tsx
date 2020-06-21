import { DispatchFunction, TokenFunction } from "../types/FunctionTypes";
import Axios from "./Axios";
import User from "../types/User";
import LoginFinalResponse from "../types/LoginFinalResponse";
import LoginEndPointResponse from "../types/LoginEndpointResponse";
import { ActionPayloadType, StateTokenType, StateUserType } from "../types/constants";

export const UserDetailsService : TokenFunction = (token: StateTokenType) : Promise<StateUserType> => {
    if(token === null) {
        return new Promise((resolve, reject) => {
            reject(null);
        });
    }

    return new Promise<User>((resolve: any, reject: any) => {
        let token_instance = Axios.token(token);
        token_instance.get('').then((response: any) => {
            resolve({
                name: response.data.data.name,
                surname: response.data.data.surname,
                email: response.data.data.email
            } as User);
        }, (error: any) => {
            reject(null);
        });
    });
}

const LoginService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) : void => {
    let login_instance = Axios.login();
    let login_response : LoginEndPointResponse;
    login_instance.post('',JSON.stringify(payload)).then((response: any) => {
        login_response = {
            token: response.data.data.token,
            errors: []
        }
        if(login_response.token === null) {
            return false;
        }
        return UserDetailsService(login_response.token);
    }, (error: any) => {
        login_response = {
            token: null,
            errors: error.response.data.errors 
        };
        return null;
    }).then((response: any) => {
        let final_response : LoginFinalResponse = {
            endpoint: login_response,
            user: response
        };

        if(login_response.token !== null) {
            sessionStorage.setItem('token',login_response.token);
        }

        dispatch(final_response);
    });
}

export default LoginService;