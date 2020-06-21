import User from "./User";
import Credentials from "./Credentials";
import Todo from "./Todo";
import LoginFinalResponse from "./LoginFinalResponse";
import { DispatchFunction } from "./FunctionTypes";

//Unions
export type StateTokenType = string | null;
export type StateUserType = User | null;
export type ActionPayloadType = Credentials | Todo | LoginFinalResponse | null;
export type ActionDispatchType = DispatchFunction | null;

//Action Types:
export const LOGIN_TYPE = 'LOGIN_TYPE';
export const CLEANUP_ERRORS_TYPE = 'CLEANUP_ERRORS_TYPE';