import State from "../types/State";
import Action from "../types/Action";
import Init from "./Init";
import LoginFinalResponse from "../types/LoginFinalResponse";
import LoginEndPointResponse from "../types/LoginEndpointResponse";
import User from "../types/User";
import { LOGIN_TYPE, CLEANUP_ERRORS_TYPE, STATE_STATE } from "../types/constants";

export const saveState = (state: State) : State => {
    sessionStorage.setItem(STATE_STATE,JSON.stringify(state));

    return state;
} 

const Reducer = (state: State | null = null, action: Action) : State => {
    if(state === null) {
        state = Init();
    }
    const isPayloadUser = (payload: any) : payload is User => {
        return typeof payload.name === 'string' && payload.name.length > 0 &&
        typeof payload.surname === 'string' && payload.surname.length > 0 &&
        typeof payload.email === 'string' && payload.email.length > 0;
    }

    const isPayloadEndPointLoginResponse = (payload: any) : payload is LoginEndPointResponse => {
        let success_login =
            typeof payload.token === 'string' &&
            payload.errors.length === 0

        let failure_login =
            payload.token === null &&
            payload.errors.length > 0

        return success_login || failure_login;
    }

    const isPayloadFinalLoginResponse = (payload: any) : payload is LoginFinalResponse => {
        return payload.endpoint !== undefined &&
            isPayloadEndPointLoginResponse(payload.endpoint) &&
            payload.user !== undefined &&
            (payload.user === null || isPayloadUser(payload.user)); 
    }

    if(action.type === LOGIN_TYPE && isPayloadFinalLoginResponse(action.payload)) {
        const newState = {
            ...state,
            token: action.payload.endpoint.token,
            errors: action.payload.endpoint.errors,
            user: action.payload.user
        }

        return saveState(newState);
    }

    if(action.type === CLEANUP_ERRORS_TYPE) {
        const newState = {
            ...state,
            errors: []
        };

        return saveState(newState);
    }

    return state;
}

export default Reducer;