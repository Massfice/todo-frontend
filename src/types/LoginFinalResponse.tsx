import LoginEndPointResponse from "./LoginEndpointResponse";
import { StateUserType } from "./constants";

export default interface LoginFinalResponse {
    endpoint: LoginEndPointResponse,
    user: StateUserType
}

