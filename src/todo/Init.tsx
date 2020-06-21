import State from "../types/State";
import { PreState } from "./PreInit";
import { STATE_STATE, STATE_REQUEST_STATE_CHANNEL, STATE_RESPONSE_STATE_CHANNEL } from "../types/constants";

const Init = () : State => {
    let savedState = sessionStorage.getItem(STATE_STATE);

    if(savedState !== null) {
        let request_channel = new BroadcastChannel(STATE_REQUEST_STATE_CHANNEL);

        request_channel.onmessage = (ev) => {
            let response_channel = new BroadcastChannel(STATE_RESPONSE_STATE_CHANNEL + ev.data);
            response_channel.postMessage(savedState);
        }

        return JSON.parse(savedState);
    }

    return PreState;
}


export default Init;