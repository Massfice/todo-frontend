import { STATE_REFRESH_STATE_CHANNEL } from "../types/constants";
import { instance_ID } from "./PreInit";

const ActionTransmiter = (store: any) => (next: any) => (action: any) => {
    let refresh_channel = new BroadcastChannel(STATE_REFRESH_STATE_CHANNEL);

    refresh_channel.postMessage({
        instanceid: instance_ID,
        action: action
    });
    refresh_channel.close();

    next(action);
}

export default ActionTransmiter;