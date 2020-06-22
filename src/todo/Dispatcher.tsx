import Action from "../types/Action";
import ActionCreator from "./ActionCreator";
import { ActionPayloadType } from "../types/constants";

function Dispatch(this: any, type: string, next: any) {
    this.type = type;
    this.next = next;
    this.use = (payload: ActionPayloadType, type: string = this.type, taketypeonly: boolean = false) : string => {
        if(!taketypeonly) {
            let _action = ActionCreator(type, payload, null);
            this.next(_action); 
        }
        return this.type;
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