import DispatcherFunctionMap from "../../types/DispatcherFunctionMap";
import ActionCreator from "../../todo/ActionCreator";
import { REFRESH_STATE_TYPE, LOGOUT_TYPE } from "../../types/constants";
import LogoutService from "../../services/LogoutService";

const MainDispatchFunction = (dispatch: any) : DispatcherFunctionMap => {
    return {
        handleRefreshState: () => dispatch(ActionCreator(REFRESH_STATE_TYPE,null,null)),
        handleLogout: (token: string) => dispatch(ActionCreator(LOGOUT_TYPE, token, LogoutService)),
    } as DispatcherFunctionMap;
}

export default MainDispatchFunction;