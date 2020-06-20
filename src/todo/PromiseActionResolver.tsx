import { Promise } from "../types/Promise";
import ActionCreator from "./ActionCreator";

const PromiseActionResolver =
    async (payload: any, type: string, promise: Promise<any,any>, dispatch: any) => {
        // let promised = promise.create(payload);
        // let effect;

        // promised.then((response: any) => {
        //     effect = promise.resolve(response);
        //     let action = ActionCreator(type, effect);
        //     dispatch(action);
        // }).catch((error: any) => {
        //     effect = promise.reject(error);
        //     let action = ActionCreator(type, effect);
        //     dispatch(action);
        // });

        const isNull = (check: Promise<any,any> | null) : check is null => {
            return check === null;
        } 

        let next : Promise<any,any> | null;
        next = promise;
        let effect = payload;
        while(next !== null) {
            let promised = next.create(effect);
            // eslint-disable-next-line
            await promised.then((response: any) => {
                if(!isNull(next)) {
                    effect = next.resolve(response,effect);
                }// eslint-disable-next-line
            }).catch((error: any) => {
                if(!isNull(next)) {
                    effect = next.reject(error,effect);
                }
            });
            
            next = next.next;
        }

        let action = ActionCreator(type, effect, null);
        dispatch(action);
}

export default PromiseActionResolver;