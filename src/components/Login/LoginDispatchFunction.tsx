import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import { Credentials } from "../../types/Credentials";
import PromiseActionResolver from "../../todo/PromiseActionResolver";
import LoginPromise from "../../promises/LoginPromise";

const LoginDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleLogin: (payload: Credentials) =>
            PromiseActionResolver(payload, 'LOGIN_TYPE', LoginPromise, dispatch),
    } as DispatcherFunctionMap;
}

export default LoginDispatchFunction;