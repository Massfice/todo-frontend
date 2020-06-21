import { ActionPayloadType, ActionDispatchType } from "./constants";

export default interface Action {
    type: string,
    payload: ActionPayloadType
    dispatch: ActionDispatchType
}