import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import TodoOperation from "../../types/TodoOperation";
import ActionCreator from "../../todo/ActionCreator";
import { TODO_TOGGLE_TYPE } from "../../types/constants";
import TodoManagerService from "../../services/TodoManagerService";

const TodosDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleToggleTodo: (payload: TodoOperation) => dispatch(ActionCreator(TODO_TOGGLE_TYPE, payload, TodoManagerService))
    } as DispatcherFunctionMap;
}

export default TodosDispatchFunction;