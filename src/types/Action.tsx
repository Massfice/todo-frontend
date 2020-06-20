import { Credentials } from "./Credentials";
import Todo from "./Todo";
import { DispatchFunction } from "./FunctionTypes";

export default interface Action {
    type: string,
    payload: Credentials | Todo | null,
    dispatch: DispatchFunction | null
}