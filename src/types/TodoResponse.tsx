import Todo from "./Todo";

export default interface TodoResponse {
    todo: Todo | null,
    errors: []
}