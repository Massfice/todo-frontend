import { DispatchFunction } from "../types/FunctionTypes";
import { ActionPayloadType, STATE_REFRESH_STATE_CHANNEL } from "../types/constants";

const RefreshService : DispatchFunction = (payload: ActionPayloadType, dispatch: any) : void => {
    let refresh_channel = new BroadcastChannel(STATE_REFRESH_STATE_CHANNEL);

    refresh_channel.onmessage = (ev) => {
        dispatch(ev.data);
    }
}

export default RefreshService;