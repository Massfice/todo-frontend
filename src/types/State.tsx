import Todo from "./Todo";
import { StateTokenType, StateUserType } from "./constants";


export default interface State {
    todos: Todo[],
    token: StateTokenType,
    errors: String[],
    user: StateUserType
}