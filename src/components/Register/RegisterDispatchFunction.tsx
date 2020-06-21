import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { REGISTER_TYPE } from "../../types/constants";
import RegisterCredentials from '../../types/RegisterCredentials';
import RegisterService from "../../services/RegisterService";

const RegisterDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleRegister:
            (payload: RegisterCredentials) =>
                dispatch(ActionCreator(REGISTER_TYPE, payload, RegisterService))
    } as DispatcherFunctionMap;
}

export default RegisterDispatchFunction;