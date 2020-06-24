import User from "./User";
import Credentials from "./Credentials";
import Todo from "./Todo";
import LoginFinalResponse from "./LoginFinalResponse";
import { DispatchFunction } from "./FunctionTypes";
import RegisterCredentials from "./RegisterCredentials";
import TodoOperation from "./TodoOperation";
import TodoResponse from "./TodoResponse";

//Unions
export type StateTokenType = string | null;
export type StateUserType = User | null;
export type ActionPayloadType = Credentials | Todo | LoginFinalResponse | null | string | RegisterCredentials | string[] | TodoOperation | TodoResponse;
export type ActionDispatchType = DispatchFunction | null;
export type TodoOperationRedirect = any | null;

//Action Types:
export const LOGIN_TYPE = 'LOGIN_TYPE';
export const CLEANUP_ERRORS_TYPE = 'CLEANUP_ERRORS_TYPE';
export const REFRESH_STATE_TYPE = 'REFRESH_STATE_TYPE';
export const REGISTER_TYPE = 'REGISTER_TYPE';
export const LOGOUT_TYPE = 'LOGOUT_TYPE';
export const SESSION_EXPIRED_TYPE = 'SESSION_EXPIRED_TYPE';
export const TODO_DELETE_TYPE = 'TODO_DELETE_TYPE';
export const TODO_EDIT_TYPE = 'TODO_EDIT_TYPE';
export const TODO_CREATE_TYPE = 'TODO_CREATE_TYPE';
export const TODO_TOGGLE_TYPE = 'TODO_TOGGLE_TYPE';

//Other

export const STATE_STATE = 'STATE_STATE';
export const STATE_REQUEST_STATE_CHANNEL = 'STATE_REQUEST_STATE_CHANNEL';
export const STATE_RESPONSE_STATE_CHANNEL = 'STATE_RESPONSE_STATE_CHANNEL';
export const STATE_REFRESH_STATE_CHANNEL = 'STATE_REFRESH_CHANNEL';

//API Endpoints

export const TODO_ENDPOINT = 'http://localhost:8000/api/todo';
export const AUTH_ENDPOINT = 'http://meet-your-elf-auth.herokuapp.com/public';