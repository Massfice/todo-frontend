import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./Reducer";
import Dispatcher from "./Dispatcher";
import ActionReceiver from "./ActionReceiver";
import ActionTransmiter from "./ActtionTransmiter";

const Store = () : any => {
    return createStore(Reducer, composeWithDevTools(applyMiddleware(Dispatcher, ActionTransmiter, ActionReceiver)));
};

export default Store;