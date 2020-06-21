import Action from "../types/Action";
import { ActionCreatorFunction } from "../types/FunctionTypes";
import { ActionPayloadType, ActionDispatchType } from "../types/constants";

const ActionCreator : ActionCreatorFunction = (
    type: string, 
    payload: ActionPayloadType,
    dispatch: ActionDispatchType
    ) : Action => {
    const action: Action = {
        type: type,
        payload: payload,
        dispatch: dispatch
    };
    return action;

}

export default ActionCreator;