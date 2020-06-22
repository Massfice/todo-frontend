import State from "../../types/State";
import Todo from "../../types/Todo";
import { stat } from "fs";

const TodosStateFunction = (state: State) : {todos: Todo[]} => {
    return {
        todos: state.todos
    };
}

export default TodosStateFunction;