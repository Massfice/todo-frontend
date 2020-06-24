import State from "../../types/State";
import Todo from "../../types/Todo";
import { StateTokenType } from "../../types/constants";

const TodosStateFunction = (state: State) : {todos: Todo[], token: StateTokenType} => {
    return {
        todos: state.todos,
        token: state.token
    };
}

export default TodosStateFunction;