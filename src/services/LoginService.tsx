import { DispatchFunction, TokenFunction } from "../types/FunctionTypes";
import Axios from "./Axios";
import User from "../types/User";
import LoginFinalResponse from "../types/LoginFinalResponse";
import LoginEndPointResponse from "../types/LoginEndpointResponse";
import { ActionPayloadType, StateTokenType, StateUserType } from "../types/constants";
import Todo from "../types/Todo";

export const UserDetailsService : TokenFunction = (token: StateTokenType) : Promise<StateUserType> => {
    if(token === null) {
        return new Promise((resolve, reject) => {
            reject(null);
        });
    }

    return new Promise<User>((resolve: any, reject: any) => {
        let token_instance = Axios.token(token);
        token_instance.get('/token/json').then((response: any) => {
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
    let user_response : User;
    login_instance.post('/token/json',JSON.stringify(payload)).then((response: any) => {
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
    }).then((response: any) : any => {
        user_response = response;

        if(user_response !== null) {
            if(login_response.token !== null) {
                return Axios.todo(login_response.token).get('/');
            } else {
                return [];
            }
        } else {
            return [];
        }
    }).then((response: any) => {
        let todos: Todo[] = [];
        if(Array.isArray(response)) {
            todos = response;
        } else {
            let received_todos : [] = response.data;

            received_todos.map((value: Todo) => {
                todos.push({
                    id: value.id,
                    text: value.text,
                    checked: value.checked
                } as Todo);
                return true;
            })
        }

        let final_response = {
            endpoint: login_response,
            user: user_response,
            todos: todos
        } as LoginFinalResponse

        dispatch(final_response);
    });
}

export default LoginService;