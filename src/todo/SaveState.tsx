import State from "../types/State";
import { STATE_STATE } from "../types/constants";

const SaveState = (state: State) : State => {
    sessionStorage.setItem(STATE_STATE,JSON.stringify(state));

    return state;
}

export default SaveState;