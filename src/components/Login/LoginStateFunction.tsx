import State from "../../types/State";
import User from "../../types/User";

const LoginStateFunction = (state: State) : {user: User | null} => {
    return {user: state.user};
}

export default LoginStateFunction;