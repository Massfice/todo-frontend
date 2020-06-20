import { PromiseCreateFunction, PromiseRejectFunction, PromiseResolveFunction } from "./FunctionTypes";

export interface Promise<T,L> {
    create: PromiseCreateFunction<T>
    resolve: PromiseResolveFunction<L>,
    reject: PromiseRejectFunction<L>,
    next: Promise<any,any> | null
}