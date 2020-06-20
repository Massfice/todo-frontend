import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { DispatchFunction } from "../../types/FunctionTypes";
import { Credentials } from "../../types/Credentials";
import Todo from "../../types/Todo";

const Test : DispatchFunction = (payload: Credentials | Todo | null, dispatch: any) => {
    setTimeout(() => dispatch(payload),5000);
}

const ErrorsDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleCleanupErrors: () => dispatch(ActionCreator('CLEANUP_ERRORS_TYPE',null,Test))
    } as DispatcherFunctionMap;
}

export default ErrorsDispatchFunction;