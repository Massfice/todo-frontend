import {} from 'redux';
import { ActionPayload } from './ActionPayload';
import { TodoState } from './TodoState';
import { Todo } from '../models/todo';
import { AddTodoAction } from './TodoActions';


const initialState: TodoState = {
    todos: [
        {asd: 'asd'},{asd: 'asd'},{asd: 'asd'},{asd: localStorage.getItem('aa') as string}
    ]
};

export const todoReducer =  (state = initialState, action: TodoAction): TodoState => {
    switch(action.type){
        case '[TODO] ADD':
            const addTodoAction = action as AddTodoAction;
            const newTodos = [...state.todos];
            newTodos.push(action.payload);
            localStorage.setItem('aa','dupa');
            return {
                ...state,
                todos: newTodos
            }
    }
    
    return state;
}

type TodoAction = AddTodoAction;