import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";

const ErrorsDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleCleanupErrors: () => dispatch(ActionCreator('CLEANUP_ERRORS_TYPE',null,null))
    } as DispatcherFunctionMap;
}

export default ErrorsDispatchFunction;