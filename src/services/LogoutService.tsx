import { DispatchFunction } from "../types/FunctionTypes";
import { ActionPayloadType } from "../types/constants";
import Axios from "./Axios";

const LogoutService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) : void => {
    payload = payload as string;

    dispatch(payload);
    Axios.logout(payload).put('/secret/json').then(() => {});
}

export default LogoutService;