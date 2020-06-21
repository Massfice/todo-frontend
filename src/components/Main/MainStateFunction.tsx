import State from "../../types/State";
import { StateUserType } from "../../types/constants";

const MainStateFunction = (state: State) : {user: StateUserType} => {
    return {user: state.user};
}

export default MainStateFunction;