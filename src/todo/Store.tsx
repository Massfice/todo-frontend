import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./Reducer";
import Dispatcher from "./Dispatcher";

const Store = () : any => {
    return createStore(Reducer, composeWithDevTools(applyMiddleware(Dispatcher)));
};

export default Store;