import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import TodoOperation from "../../types/TodoOperation";
import ActionCreator from "../../todo/ActionCreator";
import { TODO_DELETE_TYPE, TODO_EDIT_TYPE } from "../../types/constants";
import TodoManagerService from "../../services/TodoManagerService";

const TodoDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleDeleteTodo: (payload: TodoOperation) =>
            dispatch(ActionCreator(TODO_DELETE_TYPE, payload, TodoManagerService)),
        handleEditTodo: (payload: TodoOperation) =>
            dispatch(ActionCreator(TODO_EDIT_TYPE, payload, TodoManagerService))
    } as DispatcherFunctionMap;
}

export default TodoDispatchFunction;