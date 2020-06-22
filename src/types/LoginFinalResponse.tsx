import LoginEndPointResponse from "./LoginEndpointResponse";
import { StateUserType } from "./constants";
import Todo from "./Todo";

export default interface LoginFinalResponse {
    endpoint: LoginEndPointResponse,
    user: StateUserType,
    todos: Todo[]
}

