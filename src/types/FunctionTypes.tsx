import Action from "./Action";
import { Credentials } from "./Credentials";
import Todo from "./Todo";

export type DispatcherFunction = (payload: any) => void;

export type ActionCreatorFunction = (type: string, payload: any, dispatch: DispatchFunction | null) => Action;

export type PromiseCreateFunction<T> = (payload: T) => Promise<any>;

export type PromiseResolveFunction<T> = (response: any, previous: any) => T;

export type PromiseRejectFunction<T> = (error: any, previous: any) => T;

export type DispatchFunction = (payload: Todo | Credentials | null, dispatch: any) => void;