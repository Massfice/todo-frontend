import State from "../../types/State";

const ErrorsStateFunction = (state: State) : {errors : String[]} => {
    return {errors: state.errors};
}

export default ErrorsStateFunction;