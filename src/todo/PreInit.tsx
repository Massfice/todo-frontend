import State from "../types/State";

import { STATE_STATE, STATE_REQUEST_STATE_CHANNEL, STATE_RESPONSE_STATE_CHANNEL } from "../types/constants";

const instance_ID : string = "_" +
    Math.random().toString(36).substring(7) +
    Math.random().toString(36).substring(7) +
    Math.random().toString(36).substring(7) +
    Math.random().toString(36).substring(7) +
    Math.random().toString(36).substring(7);

export const PreState : State = {
    todos: [],
    token: null,
    errors: [],
    user: null
};

const PreInit = () : Promise<State> => {
    let savedState = sessionStorage.getItem(STATE_STATE);
    let request_channel = new BroadcastChannel(STATE_REQUEST_STATE_CHANNEL);
    let response_channel = new BroadcastChannel(STATE_RESPONSE_STATE_CHANNEL + instance_ID);

    request_channel.postMessage(instance_ID);
    request_channel.close();

    response_channel.postMessage(null);

    let received_state : any = null;
    const onMessageHandler = (ev : any) => {
        if(received_state === null) {
            console.log(ev.data);
            response_channel.removeEventListener('message',onMessageHandler);
            response_channel.close();
            received_state = ev.data;
        }
    }

    response_channel.onmessage = (ev) => onMessageHandler(ev);

    return new Promise<State>((resolve: any, reject: any) => {
        let Init : State = PreState;

        if(savedState !== undefined && savedState !== null) {
            Init = JSON.parse(savedState);
        }

        resolve(Init);
    });
}

export default PreInit;