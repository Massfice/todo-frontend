import Credentials from "./Credentials";
import User from "./User";

export default interface RegisterCredentials {
    credentials: Credentials,
    user: User,
    repeat: string
};