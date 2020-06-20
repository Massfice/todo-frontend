import Action from "../types/Action";
import { ActionCreatorFunction, DispatchFunction } from "../types/FunctionTypes";
import { Credentials } from "../types/Credentials";
import Todo from "../types/Todo";

const ActionCreator : ActionCreatorFunction = (
    type: string, 
    payload: Credentials | Todo | null, 
    dispatch: DispatchFunction | null
    ) : Action => {
    const action: Action = {
        type: type,
        payload: payload,
        dispatch: dispatch
    };
    return action;

}

ActionCreator('aaaa',null,null);

export default ActionCreator;