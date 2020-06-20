import {createStore} from 'redux';
import { todoReducer } from './TodoReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const todoStore = createStore(todoReducer, composeWithDevTools());