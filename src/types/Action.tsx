import { Credentials } from "./Credentials";
import Todo from "./Todo";
import { DispatchFunction } from "./FunctionTypes";
import { LoginFinalResponse } from "./LoginFinalResponse";

export default interface Action {
    type: string,
    payload: Credentials | Todo | LoginFinalResponse | null,
    dispatch: DispatchFunction | null
}