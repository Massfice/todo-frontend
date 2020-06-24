import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { TODO_CREATE_TYPE } from "../../types/constants";
import TodoManagerService from "../../services/TodoManagerService";
import TodoOperation from "../../types/TodoOperation";

const TodoCreateDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleCreateTodo: (payload: TodoOperation) => dispatch(ActionCreator(TODO_CREATE_TYPE, payload, TodoManagerService)),
    } as DispatcherFunctionMap;
}

export default TodoCreateDispatchFunction;