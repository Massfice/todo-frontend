import { ActionPayload } from "./ActionPayload";
import { Todo } from "../models/todo";

export interface AddTodoAction {
    type: string,
    payload: Todo
}

export const addTodo = (todo: Todo): AddTodoAction => ({
    payload: todo,
    type: '[TODO] ADD'
});