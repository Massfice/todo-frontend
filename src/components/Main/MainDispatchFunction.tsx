import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { REFRESH_STATE_TYPE } from "../../types/constants";

const MainDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleRefreshState: () => dispatch(ActionCreator(REFRESH_STATE_TYPE,null,null)),
    } as DispatcherFunctionMap;
}

export default MainDispatchFunction;