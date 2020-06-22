import Action from "./Action";
import LoginEndPointResponse from "./LoginEndpointResponse";
import { ActionPayloadType, ActionDispatchType } from "./constants";
import Todo from "./Todo";

export type DispatcherFunction = (payload: any) => void;

export type ActionCreatorFunction = (type: string, payload: any, dispatch: ActionDispatchType) => Action;

export type DispatchFunction = (payload: ActionPayloadType, dispatch: any) => void;

export type TokenFunction = (token: string) => Promise<any>;