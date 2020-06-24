import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import TodoStateFunction from "./TodoStateFunction";
import TodoDispatchFunction from "./TodoDispatchFunction";
import Todo from '../../types/Todo';
import TodoOperation from '../../types/TodoOperation';
import Errors from "../Errors/Component";

const Component = (props: any) => {
    const getTodo =  () : Todo | null => {
        let todos : Todo[] = props.data.todos;
        let id : any = props.data.match.match.params.todoid;
        id = Number.isNaN(id) ? id : Number.parseInt(id);

        let todo : Todo | null = null;
        if(id === undefined || !Number.isInteger(id)) {
            todo = null;
        } else {
            if(todos[id] === undefined) {
                todo = null;
            } else {
                return todos[id];
            }
        }

        return todo;
    }    
    const todo : Todo | null = getTodo();

    const form_Name = 'todoEdit_form';
    const form_Text = 'text';
    const form_Check = 'checked';

    if(todo === null) {
        props.data.match.history.push('/list');
    }

    const todo_action = (operation: string) => {
        let form = document.getElementById(form_Name);
        if(form !== null && todo !== null) {
            let formData = new FormData(form as HTMLFormElement);

            let _todo : Todo = {
                id: todo.id,
                text: formData.get(form_Text) as string,
                checked: formData.get(form_Check) !== null
            }

            let todoOperation : TodoOperation = {
                operation: operation,
                todo: _todo,
                redirect: props.data.match.history,
                token: props.token
            };
             
            if(operation === 'put') {
                props.handleEditTodo(todoOperation);
            } else if(operation === 'delete') {
                props.handleDeleteTodo(todoOperation);
            }
        }
    }

    return (
        <div key="todo">
            <NavLink exact to="/list">Lista</NavLink>
            <div key="todoEdit">
            <form id={form_Name}>
                Do Zrobienia: 
                <div key="todoEdit_form_todo">
                    <textarea name={form_Text} form={form_Name} rows={8} cols={50} defaultValue={todo !== null ? todo.text : ''}/>
                </div>
                Zrobione: <input type='checkbox' name={form_Check} defaultChecked={todo !== null && todo.checked}/>
            </form>
            <button onClick={() => {todo_action('put')}}>Zapisz Zmiany</button>
            <button onClick={() => {todo_action('delete')}}>Usuń</button>
            </div>
            <Errors/>
        </div>
    );
}

export default connect(TodoStateFunction, TodoDispatchFunction)(Component);