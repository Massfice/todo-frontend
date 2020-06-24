import State from "../types/State";
import Action from "../types/Action";
import Init from "./Init";
import LoginFinalResponse from "../types/LoginFinalResponse";
import LoginEndPointResponse from "../types/LoginEndpointResponse";
import User from "../types/User";
import { LOGIN_TYPE, CLEANUP_ERRORS_TYPE, REFRESH_STATE_TYPE, REGISTER_TYPE, LOGOUT_TYPE, SESSION_EXPIRED_TYPE, TODO_EDIT_TYPE, TODO_CREATE_TYPE, TODO_DELETE_TYPE, TODO_TOGGLE_TYPE } from "../types/constants";
import SaveState from "./SaveState";
import { PreState } from "./PreInit";
import TodoResponse from "../types/TodoResponse";
import Todo from "../types/Todo";

const AddErrorsName = (name: string, errors: string[]) : string[] => {
    let named_errors: string[] = [];
    errors.map((error: string) => {
        error = name + ': ' + error;
        named_errors.push(error);
        return true;
    });

    return named_errors;
}

const Reducer = (state: State = Init(), action: Action) : State => {
    const isPayloadUser = (payload: any) : payload is User => {
        return typeof payload.name === 'string' && payload.name.length > 0 &&
        typeof payload.surname === 'string' && payload.surname.length > 0 &&
        typeof payload.email === 'string' && payload.email.length > 0;
    }

    const isPayloadEndPointLoginResponse = (payload: any) : payload is LoginEndPointResponse => {
        let success_login =
            typeof payload.token === 'string' &&
            payload.errors.length === 0

        let failure_login =
            payload.token === null &&
            payload.errors.length > 0

        return success_login || failure_login;
    }

    const isPayloadFinalLoginResponse = (payload: any) : payload is LoginFinalResponse => {
        return payload.endpoint !== undefined &&
            isPayloadEndPointLoginResponse(payload.endpoint) &&
            payload.user !== undefined &&
            (payload.user === null || isPayloadUser(payload.user)); 
    }

    if(action.type === LOGIN_TYPE && isPayloadFinalLoginResponse(action.payload)) {
        const newState = {
            token: action.payload.endpoint.token,
            errors: AddErrorsName('LOGIN_ERROR',action.payload.endpoint.errors),
            user: action.payload.user,
            todos: action.payload.todos
        }

        return SaveState(newState);
    }

    if(action.type === CLEANUP_ERRORS_TYPE) {
        const newState = {
            ...state,
            errors: []
        };

        return SaveState(newState);
    }

    if(action.type === REFRESH_STATE_TYPE) {
        return state;
    }

    if(action.type === REGISTER_TYPE) {
        let errors : string[] = [];
        if(action.payload === null || !Array.isArray(action.payload)) {
            errors = [];
        } else {
            errors = AddErrorsName('REGISTER_ERROR', action.payload);
        }

        if(errors.length === 0) {
            window.alert('Register successfull');
        }

        let newState = {
            ...state,
            errors: errors
        }

        return SaveState(newState);
    }

    if(action.type === LOGOUT_TYPE) {
        return SaveState(PreState);
    }

    if(action.type === SESSION_EXPIRED_TYPE) {
        window.alert("Your session have expired. Please login again.");
        return SaveState(PreState);
    }

    if(action.type === TODO_EDIT_TYPE || action.type === TODO_TOGGLE_TYPE) {
        const todo = action.payload as TodoResponse;
        let newTodos = state.todos.filter(t => true);

        if(todo.todo !== null) {
            newTodos[newTodos.findIndex((value) => {
                todo.todo = todo.todo as Todo;
                return value.id === todo.todo.id;
            })] = todo.todo;
        }

        const newState = {
            ...state,
            todos: newTodos,
            errors: todo.errors
        }

        return SaveState(newState);
    }

    if(action.type === TODO_CREATE_TYPE) {
        const todo = action.payload as TodoResponse;
        let newTodos = state.todos.filter(t => true);

        if(todo.todo != null) {
            newTodos.push(todo.todo);
        }

        const newState = {
            ...state,
            todos: newTodos,
            errors: todo.errors
        }

        return SaveState(newState);
    }

    if(action.type === TODO_DELETE_TYPE) {
        const todo = action.payload as TodoResponse;
        const newTodos = state.todos.filter(t => todo.todo !== null && t.id !== todo.todo.id);

        const newState = {
            ...state,
            todos: newTodos,
            errors: todo.errors
        }

        return SaveState(newState);
    }

    return state;
}

export default Reducer;