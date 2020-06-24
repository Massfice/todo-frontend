import State from "../../types/State";
import Todo from "../../types/Todo";
import { StateTokenType } from "../../types/constants";

const TodoStateFunction = (state: State, ownProps: any) : {todos: Todo[], token: StateTokenType} => {
    return {
        todos: ownProps.data.todos,
        token: state.token
    };
}

export default TodoStateFunction;