import State from "../../types/State";
import Todo from "../../types/Todo";

const TodoStateFunction = (state: State, ownProps: any) : {todos: Todo[]} => {
    return {
        todos: ownProps.data.todos
    };
}

export default TodoStateFunction;