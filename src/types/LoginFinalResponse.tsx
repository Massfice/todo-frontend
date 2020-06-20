import { LoginEndPointResponse } from "./LoginEndpointResponse";
import User from "./User";

export interface LoginFinalResponse {
    endpoint: LoginEndPointResponse,
    user: User | null
}