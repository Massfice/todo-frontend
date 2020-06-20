import Action from "../types/Action";
import { Credentials } from "../types/Credentials";
import Todo from "../types/Todo";
import ActionCreator from "./ActionCreator";
import { LoginFinalResponse } from "../types/LoginFinalResponse";

function Dispatch(this: any, type: string, next: any) {
    this.type = type;
    this.next = next;
    this.use = (payload: Credentials | Todo | LoginFinalResponse | null) => {
        let _action = ActionCreator(this.type, payload, null);
        this.next(_action); 
    }
}

const Dispatcher = (store: any) => (next: any) => (action: Action) => {
    if(action.dispatch === null) {
        next(action);
    } else {
        let dispatch = new (Dispatch as any)(action.type, next);
       
        action.dispatch(action.payload, dispatch.use);
    }
}

export default Dispatcher;