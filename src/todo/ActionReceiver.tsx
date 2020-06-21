import { STATE_REFRESH_STATE_CHANNEL, REFRESH_STATE_TYPE, CLEANUP_ERRORS_TYPE, STATE_STATE } from "../types/constants";
import { instance_ID, PreState } from "./PreInit";
import State from "../types/State";
import Action from "../types/Action";

const ValidateAndDispatch = (state: State, next: any, action: Action, instanceid: string) => {
    let errors_count : number = state.errors.length;

    if(
        instanceid !== instance_ID &&
        action.type !== REFRESH_STATE_TYPE &&
        (action.type !== CLEANUP_ERRORS_TYPE || errors_count > 0)) {
        next(action);
    }
}

const Refresh = (next: any) => {
    let refresh_channel = new BroadcastChannel(STATE_REFRESH_STATE_CHANNEL);

    refresh_channel.onmessage = (ev) => {
        let savedState = sessionStorage.getItem(STATE_STATE);
        let state: State;
        if(savedState !== null) {
            state = JSON.parse(savedState);
        } else {
            state = PreState;
        }

        ValidateAndDispatch(state, next, ev.data.action, ev.data.instanceid);
    }
}

const ActionReceiver = (store: any) => (next: any) => (action: any) => {
    if(action.type === REFRESH_STATE_TYPE) {
        Refresh(next);
    }

    ValidateAndDispatch(store.getState(), next, action, '');
}

export default ActionReceiver;