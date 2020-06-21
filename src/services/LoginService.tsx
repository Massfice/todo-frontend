import { DispatchFunction, TokenFunction } from "../types/FunctionTypes";
import Axios from "./Axios";
import User from "../types/User";
import LoginFinalResponse from "../types/LoginFinalResponse";
import LoginEndPointResponse from "../types/LoginEndpointResponse";
import { ActionPayloadType } from "../types/constants";

export const UserDetailsService : TokenFunction = (token: string | LoginEndPointResponse) : Promise<User> => { //here
    let _token : string;
    if(typeof token === 'object' && token.token !== null) {
        _token = token.token;
    } else if(typeof token === 'string') {
        _token = token;
    }
    return new Promise<User>((resolve: any, reject: any) => {
        let token_instance = Axios.token(_token);
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
    login_instance.post('',JSON.stringify(payload)).then((response: any) => {
        let endpoint_response : LoginEndPointResponse = {
            token: response.data.data.token,
            errors: []
        }

        UserDetailsService(endpoint_response).then((response: any) => {
            let final_login_success_response : LoginFinalResponse = {
                endpoint: endpoint_response,
                user: response
            };

            dispatch(final_login_success_response);
        }, (error: any) => {
            let login_unknown_response : LoginFinalResponse = {
                endpoint: endpoint_response,
                user: null
            };

            dispatch(login_unknown_response);
        })
    }, (error: any) => {   
        console.log(error);
        let endpoint_error_response : LoginEndPointResponse = {
            token: null,
            errors: error.response.data.errors 
        }

        let final_error_response : LoginFinalResponse = {
            endpoint: endpoint_error_response,
            user: null
        };

        dispatch(final_error_response);
    });
}

export default LoginService;