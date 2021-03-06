import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import Credentials from "../../types/Credentials";
import ActionCreator from "../../todo/ActionCreator";
import LoginService from "../../services/LoginService";
import { LOGIN_TYPE } from "../../types/constants";

const LoginDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleLogin: (payload: Credentials) =>
            dispatch(ActionCreator(LOGIN_TYPE, payload, LoginService))
    } as DispatcherFunctionMap;
}

export default LoginDispatchFunction;