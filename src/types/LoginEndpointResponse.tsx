import { StateTokenType } from "./constants";

export default interface LoginEndPointResponse {
    token: StateTokenType,
    errors: Array<string>,
}