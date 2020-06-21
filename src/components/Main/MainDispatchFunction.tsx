import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { REFRESH_STATE_TYPE } from "../../types/constants";
import RefreshService from "../../services/RefreshService";

const MainDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleRefreshState: () => dispatch(ActionCreator(REFRESH_STATE_TYPE,null,RefreshService)),
    } as DispatcherFunctionMap;
}

export default MainDispatchFunction;