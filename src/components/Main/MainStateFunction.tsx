import State from "../../types/State";
import { StateUserType, StateTokenType } from "../../types/constants";

const MainStateFunction = (state: State) : {user: StateUserType, token: StateTokenType} => {
    return {
        user: state.user,
        token: state.token
    };
}

export default MainStateFunction;