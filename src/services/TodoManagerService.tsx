import { DispatchFunction } from "../types/FunctionTypes";
import { ActionPayloadType, SESSION_EXPIRED_TYPE, TODO_EDIT_TYPE, TODO_DELETE_TYPE } from "../types/constants";
import TodoOperation from "../types/TodoOperation";

const TodoManagerService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) => {
    if(payload !== null) {
        setTimeout(() => {
            payload = payload as TodoOperation;
            dispatch(payload.todo);
            // dispatch(null,SESSION_EXPIRED_TYPE);
        },1000);

        payload = payload as TodoOperation;
        const type = dispatch(null, '', true);
        if(type === TODO_EDIT_TYPE || type === TODO_DELETE_TYPE) {
            payload.redirect.push('/list');
        }
    }
}

export default TodoManagerService;