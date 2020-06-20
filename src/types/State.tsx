import Todo from "./Todo";
import User from "./User";

export default interface State {
    todos: Todo[],
    token: string | null,
    errors: String[],
    user: User | null
}