import User from "./User";
import Credentials from "./Credentials";
import Todo from "./Todo";
import LoginFinalResponse from "./LoginFinalResponse";
import { DispatchFunction } from "./FunctionTypes";
import State from "./State";

//Unions
export type StateTokenType = string | null;
export type StateUserType = User | null;
export type ActionPayloadType = Credentials | Todo | LoginFinalResponse | null | State;
export type ActionDispatchType = DispatchFunction | null;

//Action Types:
export const LOGIN_TYPE = 'LOGIN_TYPE';
export const CLEANUP_ERRORS_TYPE = 'CLEANUP_ERRORS_TYPE';
export const REFRESH_STATE_TYPE = 'REFRESH_STATE_TYPE';

//Other

export const STATE_STATE = 'STATE_STATE';
export const STATE_REQUEST_STATE_CHANNEL = 'STATE_REQUEST_STATE_CHANNEL';
export const STATE_RESPONSE_STATE_CHANNEL = 'STATE_RESPONSE_STATE_CHANNEL';
export const STATE_REFRESH_STATE_CHANNEL = 'STATE_REFRESH_CHANNEL';