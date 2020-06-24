import Todo from "./Todo";
import { TodoOperationRedirect, StateTokenType } from "./constants";

export default interface TodoOperation {
    todo: Todo,
    operation: string,
    token: StateTokenType,
    redirect: TodoOperationRedirect,
}