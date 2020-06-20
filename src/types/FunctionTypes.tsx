import Action from "./Action";
import { Credentials } from "./Credentials";
import Todo from "./Todo";
import { LoginFinalResponse } from "./LoginFinalResponse";
import { LoginEndPointResponse } from "./LoginEndpointResponse";

export type DispatcherFunction = (payload: any) => void;

export type ActionCreatorFunction = (type: string, payload: any, dispatch: DispatchFunction | null) => Action;

export type DispatchFunction = (payload: Todo | Credentials | LoginFinalResponse | null, dispatch: any) => void;

export type TokenFunction = (token: string | LoginEndPointResponse) => Promise<any>;