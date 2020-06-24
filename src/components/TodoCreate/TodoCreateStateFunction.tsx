import State from "../../types/State";
import { StateTokenType } from "../../types/constants";

const TodoCreateStateFunction = (state: State) : {token: StateTokenType} => {
    return {
        token: state.token
    };
}

export default TodoCreateStateFunction;