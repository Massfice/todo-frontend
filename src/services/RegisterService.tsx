import { DispatchFunction } from "../types/FunctionTypes";
import { ActionPayloadType } from "../types/constants";
import RegisterCredentials from "../types/RegisterCredentials";
import Axios from "./Axios";

const RegisterService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) : void => {
    if(payload !== null) {
        let register_instance = Axios.register();
        payload = payload as RegisterCredentials;

        let payload_for_service = {
            username: payload.credentials.username,
            password: payload.credentials.password,
            repassword: payload.repeat,
            firstName: payload.user.name,
            lastName: payload.user.surname
        };
    
        register_instance.post('/',JSON.stringify(payload_for_service)).then((response: any) => {
            dispatch([]);
        }, (error: any) => {
            dispatch(error.response.data.errors);
        });
    }
}

export default RegisterService;