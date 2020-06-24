import { DispatchFunction } from "../types/FunctionTypes";
import { ActionPayloadType, SESSION_EXPIRED_TYPE, TODO_EDIT_TYPE, TODO_DELETE_TYPE } from "../types/constants";
import TodoOperation from "../types/TodoOperation";
import TodoResponse from "../types/TodoResponse";
import Axios from "./Axios";
import Todo from "../types/Todo";

const TodoManagerService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) => {
    if(payload !== null) {
        payload = payload as TodoOperation;
        const todo_instance = Axios.todo(payload.token as string, {
            'Content-Type': 'application/json'
        });
        let request : Promise<any> | null = null;

        switch(payload.operation) {
            case 'post':
                request = todo_instance.post('/', JSON.stringify(payload.todo));
                break;
            case 'put':
                request = todo_instance.put('/' + payload.todo.id, JSON.stringify(payload.todo));
                break;
            case 'delete':
                request = todo_instance.delete('/' + payload.todo.id);
                break;
            case 'patch':
                request = todo_instance.patch('/' + payload.todo.id, null);
                break;
            default:
                request = null;
                break;
        }

        if(request !== null) {
            request.then((response: any) => {
                const type = dispatch({
                    todo: response.data.data as Todo,
                    errors: []
                } as TodoResponse);
                payload = payload as TodoOperation;
                if(type === TODO_EDIT_TYPE || type === TODO_DELETE_TYPE) {
                    payload.redirect.push('/list');
                }
            }, (error: any) => {
                payload = payload as TodoOperation;
                if(error.response.status === 401) {
                    dispatch(null,SESSION_EXPIRED_TYPE);
                } else if(error.response.status === 422) {
                    dispatch({
                        todo: null,
                        errors: error.response.data.Errors
                    } as TodoResponse)
                }
            });
        }
    }
}

export default TodoManagerService;